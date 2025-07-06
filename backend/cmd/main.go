package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/joho/godotenv"
)

type Server struct {
	router *chi.Mux
}

func NewServer() *Server {
	s := &Server{
		router: chi.NewRouter(),
	}
	s.setupRoutes()
	return s
}

func (s *Server) setupRoutes() {
	// Middleware
	s.router.Use(middleware.Logger)
	s.router.Use(middleware.Recoverer)
	s.router.Use(middleware.RequestID)
	s.router.Use(middleware.RealIP)
	
	// CORS
	s.router.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173", "http://localhost:4173"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300,
	}))

	// Routes
	s.router.Route("/api", func(r chi.Router) {
		r.Get("/health", s.handleHealth)
		r.Post("/contact", s.handleContact)
		
		// API routes for portfolio data
		r.Get("/skills", s.handleGetSkills)
		r.Get("/projects", s.handleGetProjects)
		r.Get("/experience", s.handleGetExperience)
	})
}

func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

type ContactForm struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func (s *Server) handleContact(w http.ResponseWriter, r *http.Request) {
	var form ContactForm
	if err := json.NewDecoder(r.Body).Decode(&form); err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}
	
	// TODO: Implement email sending logic
	log.Printf("Contact form received: %+v", form)
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "success"})
}

type Skill struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Level    int    `json:"level"`
	Category string `json:"category"`
	Icon     string `json:"icon,omitempty"`
}

func (s *Server) handleGetSkills(w http.ResponseWriter, r *http.Request) {
	// Mock data for now
	skills := []Skill{
		{ID: 1, Name: "Go", Level: 85, Category: "Backend"},
		{ID: 2, Name: "TypeScript", Level: 90, Category: "Frontend"},
		{ID: 3, Name: "Svelte", Level: 85, Category: "Frontend"},
		{ID: 4, Name: "Python", Level: 88, Category: "Backend"},
		{ID: 5, Name: "Docker", Level: 80, Category: "DevOps"},
		{ID: 6, Name: "PostgreSQL", Level: 82, Category: "Database"},
	}
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(skills)
}

type Project struct {
	ID           int      `json:"id"`
	Name         string   `json:"name"`
	Description  string   `json:"description"`
	Technologies []string `json:"technologies"`
	Image        string   `json:"image,omitempty"`
	Github       string   `json:"github,omitempty"`
	Demo         string   `json:"demo,omitempty"`
	Featured     bool     `json:"featured"`
}

func (s *Server) handleGetProjects(w http.ResponseWriter, r *http.Request) {
	// Mock data for now
	projects := []Project{
		{
			ID:           1,
			Name:         "Portfolio Website",
			Description:  "Modern portfolio built with Svelte 5 and Go",
			Technologies: []string{"Svelte", "Go", "Tailwind CSS"},
			Github:       "https://github.com/mhealy/portfolio",
			Demo:         "https://mhealy.dev",
			Featured:     true,
		},
		{
			ID:           2,
			Name:         "Task Management App",
			Description:  "Full-stack task management application with real-time updates",
			Technologies: []string{"React", "Node.js", "MongoDB", "Socket.io"},
			Github:       "https://github.com/mhealy/taskmanager",
			Demo:         "https://tasks.mhealy.dev",
			Featured:     true,
		},
	}
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(projects)
}

type Experience struct {
	ID          int      `json:"id"`
	Company     string   `json:"company"`
	Position    string   `json:"position"`
	Description string   `json:"description"`
	StartDate   string   `json:"startDate"`
	EndDate     string   `json:"endDate,omitempty"`
	Current     bool     `json:"current"`
	Skills      []string `json:"skills"`
}

func (s *Server) handleGetExperience(w http.ResponseWriter, r *http.Request) {
	// Mock data for now
	experience := []Experience{
		{
			ID:          1,
			Company:     "Tech Corp",
			Position:    "Senior Full Stack Developer",
			Description: "Leading development of microservices architecture",
			StartDate:   "2022-01",
			Current:     true,
			Skills:      []string{"Go", "React", "Kubernetes", "PostgreSQL"},
		},
		{
			ID:          2,
			Company:     "StartupXYZ",
			Position:    "Full Stack Developer",
			Description: "Built and maintained e-commerce platform",
			StartDate:   "2020-03",
			EndDate:     "2021-12",
			Current:     false,
			Skills:      []string{"Node.js", "Vue.js", "MongoDB", "AWS"},
		},
	}
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(experience)
}

func main() {
	// Load .env file if it exists
	godotenv.Load()
	
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	
	server := NewServer()
	
	log.Printf("Server starting on port %s", port)
	if err := http.ListenAndServe(":"+port, server.router); err != nil {
		log.Fatal(err)
	}
}