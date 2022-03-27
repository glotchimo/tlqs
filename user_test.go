package main

import (
	"bytes"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
)

func TestUserCreate(t *testing.T) {

	body := []byte(`{"name": "tony montana", "email": "tony@ewu.edu", "role": 100}`)

	req := httptest.NewRequest(http.MethodPost, "/users/", bytes.NewBuffer(body))

	req.Header.Set("Content-Type", "application/json")

	rec := httptest.NewRecorder()

	UserCreate(rec, req)
	res := rec.Result()

	if res.StatusCode != 201 {
		t.Errorf("expected status code 201, got %d", res.StatusCode)
	}
}

func TestUserGet(t *testing.T) {
	u := User{}
	result := Database.Create(&u)
	if result.Error != nil {
		t.Error(result.Error)
	}

	req := httptest.NewRequest(http.MethodGet, fmt.Sprintf("/users/%s/", u.ID), nil)
	req = mux.SetURLVars(req, map[string]string{"id": u.ID})
	rec := httptest.NewRecorder()

	UserGet(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}

func TestUserList(t *testing.T) {
	u := User{}
	result := Database.Create(&u)
	if result.Error != nil {
		t.Error(result.Error)
	}

	req := httptest.NewRequest(http.MethodGet, "/users/?offset=10&limit=100", nil)
	rec := httptest.NewRecorder()

	UserList(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}

func TestUserUpdate(t *testing.T) {

	u := User{}

	result := Database.Create(&u)
	if result.Error != nil {
		t.Error(result.Error)
	}

	body := []byte(`{"name": "tony montana"}`)
	req := httptest.NewRequest(http.MethodPatch, fmt.Sprintf("/users/%s/", u.ID), bytes.NewBuffer(body))
	req = mux.SetURLVars(req, map[string]string{"id": u.ID})
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	UserUpdate(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}

func TestUserDelete(t *testing.T) {
	c := User{}
	result := Database.Create(&c)
	if result.Error != nil {
		t.Error(result.Error)
	}

	req := httptest.NewRequest(http.MethodDelete, fmt.Sprintf("/users/%s/", c.ID), nil)
	req = mux.SetURLVars(req, map[string]string{"id": c.ID})
	rec := httptest.NewRecorder()

	UserDelete(rec, req)
	res := rec.Result()

	if res.StatusCode != 200 {
		t.Errorf("expected status code 200, got %d", res.StatusCode)
	}
}
