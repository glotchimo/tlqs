package main

type Session struct {
	ID            string `gorm:"primaryKey" json:"id"`
	StudentID     string `json:"student"`
	TutorID       string `json:"tutor"`
	CourseID      string `json:"course"`
	TopicID       string `json:"topic"`
	Description   string `json:"description"`
	Retrospective string `json:"retrospective"`
}
