package main

import (
	"encoding/json"
	"log"
	"net/http"
)

// User

func SignUp(w http.ResponseWriter, r *http.Request) {
	var nu NewUser
	var u UserResponse
	if err := json.NewDecoder(r.Body).Decode(&nu); err != nil {
		http.Error(w, "Wrong format JSON (SignUp)", http.StatusBadRequest)
		return
	}
	log.Print("Req success")
	if err := AddUser(nu); err != nil {
		log.Print("AddUser error")
		log.Print(err)
		return
	}
	log.Print("AddUser success")

	u = GetUserByEmailAndPassword(nu.Email, nu.Password)
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(u); err != nil {
		log.Printf("Encoding error JSON-response (SignUp): %v", err)
		return
	}
}
func SignIn(w http.ResponseWriter, r *http.Request) {
	var usi UserSignIn
	var u UserResponse
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	if err := json.NewDecoder(r.Body).Decode(&usi); err != nil {
		http.Error(w, "Wrong format JSON (SignIn)", http.StatusBadRequest)
		return
	}
	u = GetUserByEmailAndPassword(usi.Email, usi.Password)
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(u); err != nil {
		log.Printf("Encoding error JSON-response (SignIn): %v", err)
		return
	}
	log.Print("Response sent")
}
