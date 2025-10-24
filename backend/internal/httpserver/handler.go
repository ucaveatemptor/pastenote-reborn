package httpserver

import (
	"backend/internal/user"
	"encoding/json"
	"log"
	"net/http"
)

func HandleSignUp(w http.ResponseWriter, r *http.Request) {
	var nu user.NewUser
	var u user.User
	if err := json.NewDecoder(r.Body).Decode(&nu); err != nil {
		http.Error(w, "Неверный формат JSON", http.StatusBadRequest)
	}
	user.AddUser(nu)
	u, _ = user.GetUserByEmailAndPassword(nu.Email, nu.Password)
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(u); err != nil {
		log.Printf("Ошибка кодирования JSON-ответа: %v", err)
	}
}
