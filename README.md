# mHealy.dev - Personal Portfolio

A modern, responsive portfolio website built with Svelte 5 and Go, featuring a synthwave-inspired design with lavender/lilac/pink aesthetics. Showcases professional platform engineering experience, projects, and skills with interactive components.

## Tech Stack

### Frontend
- **Svelte 5** - Latest version with enhanced reactivity
- **SvelteKit** - Full-stack framework with SSR
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling with custom design system

### Backend
- **Go** - Fast, efficient API server
- **Chi Router** - Lightweight HTTP router
- **PostgreSQL** - (Coming soon) for data persistence

## Features

- ✨ Modern synthwave design with neon effects
- 🎨 Custom lavender/lilac/pink color palette
- ⚡ Fast page loads with SSR and TypeScript
- 📱 Mobile-first responsive design
- 🔄 Interactive resume with PDF generation
- 📬 Comprehensive contact form with validation
- 🎯 Project showcase with filtering and search
- 🏃 Smooth animations and glass morphism effects
- 💼 Professional Platform Engineering focus
- 🎪 Skills section with expandable use cases

## Getting Started

### Prerequisites
- Node.js 18+
- Go 1.21+
- npm or yarn
- Optional: Docker for containerized deployment

### Installation

1. Clone the repository
```bash
git clone https://github.com/mhealy/mhealy.dev.git
cd mhealy.dev
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd backend
go mod download
```

### Development

Run both frontend and backend in development mode:

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run backend:dev
```

The frontend will be available at `http://localhost:5173` and the API at `http://localhost:8080`.

### Building for Production

```bash
# Build frontend
npm run build

# Build backend
npm run backend:build
```

## Project Structure

```
mhealy.dev/
├── src/                    # Frontend source
│   ├── lib/               # Shared components and utilities
│   │   ├── components/    # Svelte components
│   │   │   ├── Hero.svelte           # Landing with typewriter
│   │   │   ├── Navigation.svelte     # Responsive nav
│   │   │   ├── SkillsSection.svelte  # Interactive skills
│   │   │   ├── ProjectsSection.svelte# Project grid
│   │   │   ├── ContactSection.svelte # Contact form
│   │   │   └── Footer.svelte         # Social links
│   │   ├── stores/        # Svelte stores (future)
│   │   └── utils/         # Helper functions
│   ├── routes/            # SvelteKit routes
│   │   ├── +layout.svelte           # Global layout
│   │   ├── +page.svelte             # Homepage
│   │   ├── resume/+page.svelte      # Resume with PDF
│   │   ├── projects/+page.svelte    # Projects showcase
│   │   ├── contact/+page.svelte     # Contact form
│   │   ├── about/+page.svelte       # About page
│   │   └── api/                     # API routes
│   │       └── resume/download/+server.ts # PDF generation
│   ├── app.html          # HTML template
│   └── app.css           # Global synthwave styles
├── backend/               # Go backend
│   ├── cmd/              # Application entrypoints
│   │   └── main.go       # Server entry point
│   └── internal/         # Internal packages (future)
├── static/               # Static assets
├── tailwind.config.js    # Custom synthwave theme
├── vite.config.ts        # Vite with API proxy
├── CLAUDE.md            # AI development guide
└── package.json         # Project configuration
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Backend
PORT=8080
DATABASE_URL=postgresql://... # Future implementation

# Email Service (for contact form) - Future implementation
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

# PDF Generation
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium # Optional for server PDF
```

## Pages Overview

### Homepage (`/`)
- Hero section with typewriter animation
- Interactive skills with hover-expandable use cases
- Featured projects grid
- Contact form with validation
- Responsive navigation and footer

### Resume (`/resume`)
- Professional resume display
- PDF download functionality (server-side Puppeteer + client-side jsPDF fallback)
- Clean, ATS-optimized formatting
- Real Platform Engineering experience

### Projects (`/projects`)
- Interactive project showcase
- Filter by category (Infrastructure, Full Stack, DevOps, etc.)
- Filter by status (Production, Development)
- Real-time search functionality
- Featured projects from YUM! Brands and Taco Bell experience

### Contact (`/contact`)
- Comprehensive contact form with budget/timeline fields
- FAQ section for common questions
- Multiple contact methods
- Response time expectations

### About (`/about`)
- Placeholder for future personal content

## Development Notes

- **Design**: Synthwave theme with lavender/lilac/pink palette
- **Animations**: Smooth transitions and glass morphism effects
- **Performance**: Optimized for fast loading and mobile responsiveness
- **Architecture**: Component-based with proper separation of concerns
- **Data**: Currently using mock data; database integration planned

## License

MIT