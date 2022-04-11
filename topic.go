package main

import (
	"log"
	"net/http"
	"strconv"

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
	Create(w, r, &Topic{})
}

func TopicGet(w http.ResponseWriter, r *http.Request) {
	Get(w, r, &Topic{}, func(db *gorm.DB) *gorm.DB { return db })
}

func TopicUpdate(w http.ResponseWriter, r *http.Request) {
	Update(w, r, &Topic{}, func(db *gorm.DB) *gorm.DB { return db })
}

func TopicDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &Topic{})
}

func TopicList(w http.ResponseWriter, r *http.Request) {
	strOffset := r.URL.Query().Get("offset")
	if strOffset == "" {
		strOffset = "0"
	}

	strLimit := r.URL.Query().Get("limit")
	if strLimit == "" {
		strLimit = "100"
	}

	page, err := strconv.Atoi(strOffset)
	if err != nil {
		log.Println(err)
		http.Error(w, "Internal server error.", http.StatusInternalServerError)
		return
	} else if page == 0 {
		page = 1
	}

	size, err := strconv.Atoi(strLimit)
	if err != nil {
		log.Println(err)
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

	List(w, r, &[]Topic{}, scope)
}
