package main

import (
	"log"
	"net/http"
	"strconv"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Department int

const (
	CS Department = iota
	Math
)

type Course struct {
	ID         string     `gorm:"primary_key" json:"id"`
	Title      string     `json:"title"`
	Department Department `json:"department"`
	Code       string     `json:"code"`
}

func (course *Course) BeforeCreate(scope *gorm.DB) error {
	course.ID = uuid.New().String()
	return nil
}

func CourseCreate(w http.ResponseWriter, r *http.Request) {
	Create(w, r, &Course{})
}

func CourseGet(w http.ResponseWriter, r *http.Request) {
	Get(w, r, &Course{}, func(db *gorm.DB) *gorm.DB { return db })
}

func CourseList(w http.ResponseWriter, r *http.Request) {
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
		return
	} else if page == 0 {
		page = 1
	}

	size, err := strconv.Atoi(strLimit)
	if err != nil {
		log.Println(err)
		http.Error(w, "Internal server error.", http.StatusInternalServerError)
		return
	}

	offset := (page - 1) * size

	scope := func(db *gorm.DB) *gorm.DB {
		if size == 0 {
			return db.Offset(offset).Limit(size)
		}

		return db.Offset(offset)
	}

	List(w, r, &[]Course{}, scope)
}

func CourseUpdate(w http.ResponseWriter, r *http.Request) {
	Update(w, r, &Course{}, func(db *gorm.DB) *gorm.DB { return db })
}

func CourseDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &Course{})
}
