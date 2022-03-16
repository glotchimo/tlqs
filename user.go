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
	Sessions []Session `gorm:"many2many:user_sessions" json:"sessions"`
	Courses  []Course  `gorm:"many2many:user_courses" json:"courses"`
}
