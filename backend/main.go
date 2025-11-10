package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	DB, _ = InitDB()
	if err := DeleteTables(DB); err != nil {
		log.Fatal(err)
	}
	if err := InitTables(DB); err != nil {
		log.Fatal(err)
	}
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Post("/sign-up", SignUp)
	r.Post("/sign-in", SignIn)

	http.ListenAndServe(":8080", r)
}
