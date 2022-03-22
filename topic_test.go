package main

//Test naming convention
//name of method being tested.
//Passed in params.
//Expected return type.

import (
	"bytes"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
)

//Method headers need to start with Test in order for the library to run the test.
func TestTopicCreate_GivenValidTopic_ReturnsSuccess(t *testing.T) {
	//building request
	body := []byte(`{"CourseID":"123", "Name":"LearnGo"}`)

	//sending it
	req := httptest.NewRequest(http.MethodPost, "/topics/", bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	TopicCreate(rec, req)

	//returned
	res := rec.Result()

	if res.StatusCode != 201 {
		t.Errorf("expected status code 201, got %d", res.StatusCode)
	}
}

func TestTopicGet(t *testing.T) {
	topic := Topic{
		CourseID: "123",
		Name:     "LearnGo",
	}

	result := Database.Create(&topic)
	if result.Error != nil {
		t.Error(result.Error)
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

func TestTopicsUpdate(t *testing.T) {
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
