package main

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Topic struct {
	ID       string `gorm:"primaryKey" json:"id"`
	CourseID string `json:"course"`
	Name     string `json:"name"`
}

func (topic *Topic) BeforeCreate(scope *gorm.DB) error {
	topic.ID = uuid.New().String()
	return nil
}
