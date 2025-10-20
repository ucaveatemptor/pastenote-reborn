package user

import (
	"backend/internal/database"
	"log"
)

func AddUser(newUser NewUser) error {
	_, err := database.DB.Exec("INSERT INTO users (name, password) VALUES ($1, $2) RETURNING id", newUser.Username, newUser.Password)
	if err != nil {
		log.Fatal(err)
	}
	return nil
}
