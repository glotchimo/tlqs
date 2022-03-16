package main

import (
	"net/http"

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

/// 	CRUD Functions
//	----------------------
//Create a new session
func SessionCreate(w http.ResponseWriter, r *http.Request) {
	Create(w, r, &Session{})
}

//Get (read) an existing session
func SessionGet(w http.ResponseWriter, r *http.Request) {
	Get(w, r, &Session{}, func(db *gorm.DB) *gorm.DB { return db })
}

func SessionList(w http.ResponseWriter, r *http.Request) {
	//Stub
}

//Update an existing session
func SessionUpdate(w http.ResponseWriter, r *http.Request) {
	Update(w, r, &Session{}, func(db *gorm.DB) *gorm.DB { return db })
}

//Delete an existing session
func SessionDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &Session{})
}
