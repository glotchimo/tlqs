package main

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Session struct {
	ID            string `gorm:"primaryKey" json:"id"`
	UserID        string `json:"student"`
	TutorID       string `json:"tutor"`
	CourseID      string `json:"course"`
	TopicID       string `json:"topic"`
	Description   string `json:"description"`
	Retrospective string `json:"retrospective"`
}

func (session *Session) BeforeCreate(scope *gorm.DB) error {
	session.ID = uuid.New().String()
	return nil
}
