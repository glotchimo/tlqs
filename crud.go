package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func Create(w http.ResponseWriter, r *http.Request, obj *interface{}) {
	if result := Database.Create(obj); result.Error != nil {
		log.Println(result.Error)
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(obj); err != nil {
		log.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	} else {
		w.WriteHeader(http.StatusCreated)
		return
	}
}
