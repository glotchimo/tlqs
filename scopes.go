package main

import (
	"log"
	"net/http"
	"strconv"
	"strings"

	"gorm.io/gorm"
)

func ByDefault() func(*gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB { return db }
}

func ByOffset(r *http.Request, w http.ResponseWriter) func(*gorm.DB) *gorm.DB {
	strOffset := r.URL.Query().Get("offset")
	if strOffset == "" {
		strOffset = "0"
	}

	strLimit := r.URL.Query().Get("limit")
	if strLimit == "" {
		strLimit = "100"
	}

	page, err := strconv.Atoi(strOffset)
	if err != nil {
		log.Println(err)
		http.Error(w, "Internal server error.", http.StatusInternalServerError)
		return ByDefault()
	} else if page == 0 {
		page = 1
	}

	size, err := strconv.Atoi(strLimit)
	if err != nil {
		log.Println(err)
		http.Error(w, "Internal server error.", http.StatusInternalServerError)
		return ByDefault()
	}

	offset := (page - 1) * size

	scope := func(db *gorm.DB) *gorm.DB {
		if size == 0 {
			return db.Offset(offset).Limit(size)
		}

		return db.Offset(offset)
	}

	return scope
}
