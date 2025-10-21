package main

import (
	"backend/internal/config"
	"fmt"
)

func main() {
	cfg := config.LoadConfig()
	fmt.Print(cfg)
	// database.DB, _ = database.InitDB()
	// defer database.DB.Close()

	// srv := new(server.Server)
	// if err := srv.Run("8080"); err != nil {
	// 	log.Fatal(err.Error())
	// }
}
