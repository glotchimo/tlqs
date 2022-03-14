package main

import (
	"bytes"
	"net/http/httptest"
	"testing"
)

func TestCourseCreate(t *testing.T) {
	body := []byte(`"title": "Machine Learning", "code": "CSCD496"`)

	req := httptest.NewRequest("POST", "/courses", bytes.NewBuffer(body))
	rec := httptest.NewRecorder()

	CourseCreate(rec, req)
	res := rec.Result()

	if res.StatusCode != 201 {
		t.Errorf("expected status code 201, got %d", res.StatusCode)
	}
}
