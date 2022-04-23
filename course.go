package main

import (
	"net/http"

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
	List(w, r, &[]Course{}, ByOffset(w, r), ByDepartment(w, r))
}

func CourseUpdate(w http.ResponseWriter, r *http.Request) {
	Update(w, r, &Course{}, func(db *gorm.DB) *gorm.DB { return db })
}

func CourseDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &Course{})
}
