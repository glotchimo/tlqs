package main

import (
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
