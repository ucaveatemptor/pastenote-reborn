package main

import (
	"backend/internal/database"
	"log"
)

func main() {
	// cfg := config.LoadConfig()
	// fmt.Print(cfg)
	// srv := new(server.Server)
	// if err := srv.Run(cfg.Port); err != nil {
	// 	panic(err)
	// }
	database.DB, _ = database.InitDB()
	if err := database.InitTables(database.DB); err != nil {
		log.Fatal("ds")
	}

	// srv := new(server.Server)
	// if err := srv.Run("8080"); err != nil {
	// 	log.Fatal(err.Error())
	// }
}
