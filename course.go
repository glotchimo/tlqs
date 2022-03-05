package main

type Course struct {
	ID    string `gorm:"primary_key" json:"id"`
	Title string `json:"title"`
	Code  string `json:"code"`
}
