package main

import (
	"net/http"

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

func TopicCreate(w http.ResponseWriter, r *http.Request) {
	//calling the generic create with the following struct.
	Create(w, r, &Topic{})
}

func TopicGet(w http.ResponseWriter, r *http.Request) {
	Get(w, r, &Topic{}, func(db *gorm.DB) *gorm.DB { return db })
}

func TopicUpdate(w http.ResponseWriter, r *http.Request) {
	Update(w, r, &Course{}, func(db *gorm.DB) *gorm.DB { return db })
}

func CouseDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &Topic{})
}
