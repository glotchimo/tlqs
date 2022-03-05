package main

type Topic struct {
	ID       string `gorm:"primaryKey" json:"id"`
	CourseID string `json:"course"`
	Name     string `json:"name"`
}
