package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
)

func TestCourseCreate(t *testing.T) {
	body := []byte(`{"title": "Machine Learning", "code": "CSCD496"}`)
	req := httptest.NewRequest(http.MethodPost, "/courses/", bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	CourseCreate(rec, req)
	res := rec.Result()

	if res.StatusCode != 201 {
		t.Errorf("expected status code 201, got %d", res.StatusCode)
	}
}

func TestCourseGet(t *testing.T) {
	c := Course{
		Code:  "CSCD496",
		Title: "Machine Learning",
	}
	result := Database.Create(&c)
	if result.Error != nil {
		t.Error(result.Error)
	}

	req := httptest.NewRequest(http.MethodGet, fmt.Sprintf("/courses/%s/", c.ID), nil)
	req = mux.SetURLVars(req, map[string]string{"id": c.ID})
	rec := httptest.NewRecorder()

	CourseGet(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}

func TestCourseList(t *testing.T) {
	c := Course{
		Code:  "CSCD496",
		Title: "Machine Learning",
	}
	result := Database.Create(&c)
	if result.Error != nil {
		t.Error(result.Error)
	}

	req := httptest.NewRequest(http.MethodGet, "/courses/?offset=10&limit=100&department=0", nil)
	rec := httptest.NewRecorder()

	CourseList(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}

func TestCourseListFilter(t *testing.T) {
	c1 := Course{
		Code:       "1",
		Title:      "1",
		Department: CS,
	}
	c2 := Course{
		Code:       "2",
		Title:      "2",
		Department: Math,
	}
	c3 := Course{
		Code:       "3",
		Title:      "3",
		Department: Math,
	}

	result := Database.CreateInBatches([]Course{c1, c2, c3}, 3)
	if result.Error != nil {
		t.Error(result.Error)
	}

	req := httptest.NewRequest(http.MethodGet, "/courses/?department=1", nil)
	rec := httptest.NewRecorder()

	CourseList(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}

	courses := []Course{}
	if err := json.NewDecoder(res.Body).Decode(&courses); err != nil {
		t.Error(err)
	}

	if len(courses) != 2 {
		t.Errorf("expected 2 courses, got %d", len(courses))
	}
}

func TestCourseUpdate(t *testing.T) {
	c := Course{
		Code:  "CSCD260",
		Title: "Architecture & Organization",
	}
	result := Database.Create(&c)
	if result.Error != nil {
		t.Error(result.Error)
	}

	body := []byte(`{"title": "Computer Architecture"}`)
	req := httptest.NewRequest(http.MethodPatch, fmt.Sprintf("/courses/%s/", c.ID), bytes.NewBuffer(body))
	req = mux.SetURLVars(req, map[string]string{"id": c.ID})
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	CourseUpdate(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}

func TestCourseDelete(t *testing.T) {
	c := Course{
		Code:  "CSCD320",
		Title: "Algorithms",
	}
	result := Database.Create(&c)
	if result.Error != nil {
		t.Error(result.Error)
	}

	req := httptest.NewRequest(http.MethodDelete, fmt.Sprintf("/courses/%s/", c.ID), nil)
	req = mux.SetURLVars(req, map[string]string{"id": c.ID})
	rec := httptest.NewRecorder()

	CourseDelete(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}
