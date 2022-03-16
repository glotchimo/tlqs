package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Course struct {
	ID    string `gorm:"primary_key" json:"id"`
	Title string `json:"title"`
	Code  string `json:"code"`
}

func (course *Course) BeforeCreate(scope *gorm.DB) error {
	course.ID = uuid.New().String()
	return nil
}

func CourseCreate(w http.ResponseWriter, r *http.Request) {
	var course Course
	if err := json.NewDecoder(r.Body).Decode(&course); err != nil {
		http.Error(w, "Couldn't decode request body.", http.StatusBadRequest)
		return
	}

	Create(w, r, &course)
}

func CourseGet(w http.ResponseWriter, r *http.Request) {
	Get(w, r, &Course{}, func(db *gorm.DB) *gorm.DB { return db })
}

func CourseList(w http.ResponseWriter, r *http.Request) {
	page, err := strconv.Atoi(r.URL.Query().Get("offset"))
	if err != nil {
		log.Fatal(err)
		http.Error(w, "Internal server error.", http.StatusInternalServerError)
		return
	} else if page == 0 {
		page = 1
	}

	size, err := strconv.Atoi(r.URL.Query().Get("limit"))
	if err != nil {
		log.Fatal(err)
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
	var course Course
	if err := json.NewDecoder(r.Body).Decode(&course); err != nil {
		http.Error(w, "Couldn't decode request body.", http.StatusBadRequest)
		return
	}

	Update(w, r, &course, func(db *gorm.DB) *gorm.DB { return db })
}

func CourseDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &Course{})
}
