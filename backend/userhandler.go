package main

import (
	"database/sql"
	"fmt"
	"log"
)

func AddUser(nu NewUser) error {
	_, err := DB.Exec("INSERT INTO users (name, password, email) VALUES ($1, $2, $3)", nu.Username, nu.Password, nu.Email)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("User Added Succesfully")
	return nil
}
func GetUserByEmailAndPassword(email string, password string) UserResponse {
	var u UserResponse
	row := DB.QueryRow("SELECT id, name, email FROM users WHERE email = $1 AND password = $2", email, password)
	err := row.Scan(&u.ID, &u.Username, &u.Email)
	if err != nil {
		if err == sql.ErrNoRows {
			log.Print("Пользователь не найден")
		}
		log.Print(err)
	}
	return u
}
