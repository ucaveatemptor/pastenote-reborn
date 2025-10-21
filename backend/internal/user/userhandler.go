package user

import (
	"backend/internal/database"
	"log"
)

func AddUser(newUser NewUser) error {
	_, err := database.DB.Exec("INSERT INTO users (name, password, email) VALUES ($1, $2, $3)", newUser.Username, newUser.Password, newUser.Email)
	if err != nil {
		log.Fatal(err)
	}
	return nil
}
