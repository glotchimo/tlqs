package main

import (
	"net/http"
	"strconv"

	"gorm.io/gorm"
)

func ByDefault() func(*gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB { return db }
}

func ByOffset(w http.ResponseWriter, r *http.Request) func(*gorm.DB) *gorm.DB {
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
		return ByDefault()
	} else if page == 0 {
		page = 1
	}

	size, err := strconv.Atoi(strLimit)
	if err != nil {
		return ByDefault()
	}

	offset := (page - 1) * size

	return func(db *gorm.DB) *gorm.DB {
		if size == 0 {
			return db.Offset(offset).Limit(size)
		}

		return db.Offset(offset)
	}
}

func ByDepartment(w http.ResponseWriter, r *http.Request) func(*gorm.DB) *gorm.DB {
	department := r.URL.Query().Get("department")
	if department == "" {
		return ByDefault()
	}

	return func(db *gorm.DB) *gorm.DB {
		return db.Where("department = ?", department)
	}
}

func ByEmail(w http.ResponseWriter, r *http.Request) func(*gorm.DB) *gorm.DB {
	email := r.URL.Query().Get("email")
	if email == "" {
		return ByDefault()
	}

	return func(db *gorm.DB) *gorm.DB {
		return db.Where("email = ?", email)
	}
}
