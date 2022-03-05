package main

type Role int

const (
	Student Role = iota
	Tutor
	Faculty
)

type User struct {
	ID       string    `gorm:"primaryKey" json:"id"`
	Name     string    `json:"name"`
	Email    string    `json:"email"`
	Role     Role      `json:"role"`
	Sessions []Session `json:"sessions"`
	Courses  []Course  `json:"courses"`
}
