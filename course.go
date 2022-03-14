package main

import (
	"encoding/json"
	"net/http"

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
