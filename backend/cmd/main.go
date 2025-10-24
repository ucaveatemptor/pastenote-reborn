package main

import (
	"backend/internal/database"
	"backend/internal/httpserver"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	database.DB, _ = database.InitDB()
	if err := database.InitTables(database.DB); err != nil {
		log.Fatal(err)
	}

	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Post("/sign-up", httpserver.HandleSignUp)

	http.ListenAndServe(":8080", r)
}
