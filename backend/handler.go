package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func SignUp(w http.ResponseWriter, r *http.Request) {
	var nu NewUser
	var u UserResponse
	fmt.Println("req accepted")
	if err := json.NewDecoder(r.Body).Decode(&nu); err != nil {
		http.Error(w, "Неверный формат JSON (SignUp)", http.StatusBadRequest)
		return
	}
	fmt.Println("req success")
	AddUser(nu)
	fmt.Println("add success")
	u = GetUserByEmailAndPassword(nu.Email, nu.Password)
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(u); err != nil {
		log.Printf("Ошибка кодирования JSON-ответа (SignUp): %v", err)
		return
	}
}

func SignIn(w http.ResponseWriter, r *http.Request) {
	var usi UserSignIn
	var u UserResponse
	if err := json.NewDecoder(r.Body).Decode(&usi); err != nil {
		http.Error(w, "Неверный формат JSON (SignIn)", http.StatusBadRequest)
		return
	}
	u = GetUserByEmailAndPassword(usi.Email, usi.Password)
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(u); err != nil {
		log.Printf("Ошибка кодирования JSON-ответа (SignIn): %v", err)
		return
	}
	fmt.Println("Req sent")

}
