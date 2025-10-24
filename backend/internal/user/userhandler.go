package user

import (
	"backend/internal/database"
	"database/sql"
	"log"
)

func AddUser(nu NewUser) error {
	_, err := database.DB.Exec("INSERT INTO users (name, password, email) VALUES ($1, $2, $3)", nu.Username, nu.Password, nu.Email)
	if err != nil {
		log.Fatal(err)
	}
	return nil
}
func GetUserByEmailAndPassword(email string, password string) (User, error) {
	var u User
	row := database.DB.QueryRow("SELECT id, name, email FROM users WHERE email = ? AND password = ?", email, password)
	err := row.Scan(&u.ID, &u.Username, &u.Email)
	if err != nil {
		if err == sql.ErrNoRows {
			log.Print("пользователь не найден")
		}
		log.Print("Ошибка БД")
	}
	return u, nil
}
