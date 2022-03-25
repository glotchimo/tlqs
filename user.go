package main

import (
	"log"
	"net/http"
	"strconv"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Role int

const (
	Student Role = iota
	Faculty
	Tutor
)

type User struct {
	ID       string    `gorm:"primaryKey" json:"id"`
	Name     string    `json:"name"`
	Email    string    `json:"email"`
	Role     Role      `json:"role"`
	Sessions []Session `gorm:"many2many:user_sessions" json:"sessions"`
	Courses  []Course  `gorm:"many2many:user_courses" json:"courses"`
}

func (user *User) BeforeCreate(scope *gorm.DB) error {
	user.ID = uuid.New().String()
	return nil
}

func UserCreate(w http.ResponseWriter, r *http.Request) {
	Create(w, r, &User{})
}

func UserGet(w http.ResponseWriter, r *http.Request) {

	Get(w, r, &User{}, func(db *gorm.DB) *gorm.DB { return db })
}

func UserUpdate(w http.ResponseWriter, r *http.Request) {
	Update(w, r, &User{}, func(db *gorm.DB) *gorm.DB { return db })
}

func UserDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &User{})
}

func UserList(w http.ResponseWriter, r *http.Request) {

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

	List(w, r, &[]User{}, scope)
}
