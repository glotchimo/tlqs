package main

import (
	"log"
	"net/http"
	"strconv"

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

func SessionCreate(w http.ResponseWriter, r *http.Request) {
	Create(w, r, &Session{})
}

func SessionGet(w http.ResponseWriter, r *http.Request) {
	Get(w, r, &Session{}, func(db *gorm.DB) *gorm.DB { return db })
}

func SessionList(w http.ResponseWriter, r *http.Request) {
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

	List(w, r, &[]Session{}, scope)

}

func SessionUpdate(w http.ResponseWriter, r *http.Request) {
	Update(w, r, &Session{}, func(db *gorm.DB) *gorm.DB { return db })
}

func SessionDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &Session{})
}
