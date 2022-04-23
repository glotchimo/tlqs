package main

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"gorm.io/gorm"
)

// Create a record in the database using the given pointer.
// `obj` should be a pointer to an initialized model struct with data in it.
func Create(w http.ResponseWriter, r *http.Request, obj interface{}) {
	if err := json.NewDecoder(r.Body).Decode(obj); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if result := Database.FirstOrCreate(obj); result.Error != nil {
		log.Println(result.Error)
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	if err := json.NewEncoder(w).Encode(obj); err != nil {
		log.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

// Get a record from the database by ID (in request pattern) using the given pointer.
// `obj` should be a pointer to an empty model struct.
func Get(w http.ResponseWriter, r *http.Request, obj interface{}, scope func(db *gorm.DB) *gorm.DB) {
	vars := mux.Vars(r)
	id := vars["id"]

	result := Database.Scopes(scope).First(obj, "id = ?", id)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		http.Error(w, result.Error.Error(), http.StatusNotFound)
		return
	} else if result.Error != nil {
		log.Println(result.Error.Error())
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(obj); err != nil {
		log.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

// List records from the database by the given scope function.
// `obj` should be a pointer to a slice of model type.
func List(w http.ResponseWriter, r *http.Request, obj interface{}, scopes ...func(db *gorm.DB) *gorm.DB) {
	result := Database.Scopes(scopes...).Find(obj)
	if result.Error != nil {
		log.Println(result.Error.Error())
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(obj); err != nil {
		log.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

// Update a record in the database by ID (in request pattern) using the given pointer.
// `obj` should be a pointer to an initialized model struct with data in it.
func Update(w http.ResponseWriter, r *http.Request, obj interface{}, scope func(db *gorm.DB) *gorm.DB) {
	vars := mux.Vars(r)
	id := vars["id"]

	result := Database.First(obj, "id = ?", id)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		http.Error(w, result.Error.Error(), http.StatusNotFound)
		return
	} else if result.Error != nil {
		log.Println(result.Error.Error())
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	var data interface{}
	if err := json.NewDecoder(r.Body).Decode(obj); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if result := Database.Model(obj).Updates(data); result.Error != nil {
		log.Println(result.Error)
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}
}

// Delete a record from the database by ID (in request pattern) using the given pointer.
// `obj` should be a pointer to an empty model struct.
func Delete(w http.ResponseWriter, r *http.Request, obj interface{}) {
	vars := mux.Vars(r)
	id := vars["id"]

	result := Database.First(obj, "id = ?", id)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		http.Error(w, result.Error.Error(), http.StatusNotFound)
		return
	} else if result.Error != nil {
		log.Println(result.Error)
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	if result := Database.Delete(obj); result.Error != nil {
		log.Println(result.Error)
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	w.Write([]byte("Object deleted."))
}
