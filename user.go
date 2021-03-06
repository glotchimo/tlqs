package main

import (
	"net/http"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Role int

const (
	_ Role = iota
	Student
	Tutor
	Faculty
)

type User struct {
	ID    string `gorm:"primaryKey" json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Role  Role   `json:"role"`
}

func (user *User) BeforeCreate(scope *gorm.DB) error {
	user.ID = uuid.New().String()
	user.Role = 1
	return nil
}

func UserCreate(w http.ResponseWriter, r *http.Request) {
	Create(w, r, &User{})
}

func UserGet(w http.ResponseWriter, r *http.Request) {
	Get(w, r, &User{}, func(db *gorm.DB) *gorm.DB { return db })
}

func UserList(w http.ResponseWriter, r *http.Request) {
	List(w, r, &[]User{}, ByOffset(w, r), ByEmail(w, r))
}

func UserUpdate(w http.ResponseWriter, r *http.Request) {
	Update(w, r, &User{}, func(db *gorm.DB) *gorm.DB { return db })
}

func UserDelete(w http.ResponseWriter, r *http.Request) {
	Delete(w, r, &User{})
}
