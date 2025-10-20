package main

import (
	"backend/internal/database"
	"backend/internal/user"
	"log"
)

func main() {
	database.DB, _ = database.InitDB()
	nu := user.NewUser{
		Username: "testuser",
		Password: "testpass",
	}
	if err := user.AddUser(nu); err != nil {
		log.Fatalf("AddUser failed: %v", err)
	}
}
