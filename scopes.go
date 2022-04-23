package main

import (
	"net/http"
	"strconv"
	"strings"

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
	table := strings.Split(r.URL.Path, "/")[0]
	department := r.URL.Query().Get("department")

	if table == "" || department == "" {
		return ByDefault()
	}

	return func(db *gorm.DB) *gorm.DB {
		return db.Table(table).Where("department = ?", department)
	}
}

func ByCourse(w http.ResponseWriter, r *http.Request) func(*gorm.DB) *gorm.DB {
	table := strings.Split(r.URL.Path, "/")[0]
	course := r.URL.Query().Get("course")

	if table == "" || course == "" {
		return ByDefault()
	}

	return func(db *gorm.DB) *gorm.DB {
		return db.Table(table).Where("course_id = ?", course)
	}
}
