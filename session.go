package main

import (
	"net/http"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Session struct {
	ID            string `gorm:"primaryKey" json:"id"`
	UserID        string `json:"student"`
	TutorID       string `json:"tutor"`
	CourseID      string `json:"course"`
	Topic         string `json:"topic"`
	Description   string `json:"description"`
	Retrospective string `json:"retrospective"`
	Completed     bool   `json:"completed"`
	CreatedAt     string `json:"created_at"`
}

func (session *Session) BeforeCreate(scope *gorm.DB) error {
	session.ID = uuid.New().String()
	session.CreatedAt = time.Now().Format("15:04:05")

	return nil
}

func SessionCreate(w http.ResponseWriter, r *http.Request) {
	Create(w, r, &Session{})
}

func SessionGet(w http.ResponseWriter, r *http.Request) {
	Get(w, r, &Session{}, func(db *gorm.DB) *gorm.DB { return db })
}

func SessionList(w http.ResponseWriter, r *http.Request) {
	List(w, r, &[]Session{}, ByOffset(w, r))

}

func SessionUpdate(w http.ResponseWriter, r *http.Request) {
	Update(w, r, &Session{}, func(db *gorm.DB) *gorm.DB { return db })
}

func SessionDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &Session{})
}
