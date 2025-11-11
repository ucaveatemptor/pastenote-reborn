package main

import (
	"database/sql"
	"log"
)

func AddUser(nu NewUser) error {
	query := `
		INSERT INTO users (name, password, email)
		VALUES ($1, $2, $3)
	`
	if _, err := DB.Exec(
		query,
		nu.Username,
		nu.Password,
		nu.Email,
	); err != nil {
		return err
	}
	log.Print("User Added Succesfully")
	return nil
}
func GetUserByEmailAndPassword(email string, password string) UserResponse {
	var u UserResponse
	query := `
		SELECT id, name, email 
		FROM users 
		WHERE email = $1 AND password = $2
	`
	if err := DB.QueryRow(
		query,
		email,
		password,
	).Scan(&u.ID, &u.Username, &u.Email); err != nil {
		if err == sql.ErrNoRows {
			log.Print("User not found")
		}
		log.Print(err)
	}
	return u
}

func DeleteUser(uir UserIdRequest) error {
	query := `
		DELETE FROM users
		WHERE id = $1
	`
	_, err := DB.Exec(query, uir)
	return err
}
