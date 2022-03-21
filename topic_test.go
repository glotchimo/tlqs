package main

//Test naming convention
//name of method being tested.
//Passed in params.
//Expected return type.

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"
)

//Method headers need to start with Test in order for the library to run the test.
func TestTopicCreate_GivenValidTopic_ReturnsSuccess(t *testing.T) {
	//building request
	body := []byte(`{"CourseID":"123", "Name":"hello"}`)

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
