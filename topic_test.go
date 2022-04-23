package main

import (
	"bytes"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
)

func TestTopicCreate(t *testing.T) {
	body := []byte(`{"course":"123", "name":"LearnGo"}`)
	req := httptest.NewRequest(http.MethodPost, "/topics/", bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	TopicCreate(rec, req)
	res := rec.Result()

	if res.StatusCode != 201 {
		t.Errorf("expected status code 201, got %d", res.StatusCode)
	}
}

func TestTopicGet(t *testing.T) {
	course := Course{
		Title: "Database",
		Code:  "1",
	}
	courseResult := Database.Create(&course)
	if courseResult.Error != nil {
		t.Error(courseResult.Error)
	}

	topic := Topic{
		CourseID: course.ID,
		Name:     "relations",
	}
	topicResult := Database.Create(&topic)
	if topicResult.Error != nil {
		t.Error(topicResult.Error)
	}

	req := httptest.NewRequest(http.MethodGet, fmt.Sprintf("/topics/%s/", topic.ID), nil)
	req = mux.SetURLVars(req, map[string]string{"id": topic.ID})
	rec := httptest.NewRecorder()

	TopicGet(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}

func TestTopicList(t *testing.T) {
	course := Course{
		Title: "Database",
		Code:  "1",
	}
	courseResult := Database.Create(&course)
	if courseResult.Error != nil {
		t.Error(courseResult.Error)
	}

	topic := Topic{
		CourseID: course.ID,
		Name:     "relations",
	}
	topicResult := Database.Create(&topic)
	if topicResult.Error != nil {
		t.Error(topicResult.Error)
	}

	req := httptest.NewRequest(http.MethodGet, "/topics/?offset=10&limit=100&course="+course.ID, nil)
	rec := httptest.NewRecorder()

	TopicList(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}

func TestTopicUpdate(t *testing.T) {
	topic := Topic{
		CourseID: "123",
		Name:     "LearnGo",
	}
	result := Database.Create(&topic)
	if result.Error != nil {
		t.Error(result.Error)
	}

	body := []byte(`{"CourseID":"123", "Name":"LearnGo"}`)
	req := httptest.NewRequest(http.MethodPatch, fmt.Sprintf("/topics/%s/", topic.ID), bytes.NewBuffer(body))
	req = mux.SetURLVars(req, map[string]string{"id": topic.ID})
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	TopicUpdate(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}

func TestTopicDelete(t *testing.T) {
	topic := Topic{
		CourseID: "123",
		Name:     "LearnGo",
	}
	result := Database.Create(&topic)
	if result.Error != nil {
		t.Error(result.Error)
	}

	req := httptest.NewRequest(http.MethodDelete, fmt.Sprintf("/topics/%s/", topic.ID), nil)
	req = mux.SetURLVars(req, map[string]string{"id": topic.ID})
	rec := httptest.NewRecorder()

	TopicDelete(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}
