package main

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestSessionCreate(t *testing.T) {
	body := []byte(`{"student": "00123456", "tutor": "00654321", "course": "CSCD488", "topic": "Web Application Design", "description": "I'm having trouble implementing a web application, can you help me?", "retrospective": "Not sure what this is to be honest."}`)
	req := httptest.NewRequest(http.MethodPost, "/sessions/", bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	SessionCreate(rec, req)
	res := rec.Result()

	if res.StatusCode != 201 {
		t.Errorf("expected status code 201, got %d", res.StatusCode)
	}
}

func TestSessionGet(t *testing.T) {
	//Stub
}

func TestSessionList(t *testing.T) {
	//Stub
}

func TestSessionUpdate(t *testing.T) {
	//Stub
}

func TestSessionDelete(t *testing.T) {
	//Stub
}
