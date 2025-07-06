# mHealy.dev - Personal Portfolio

A modern, responsive portfolio website built with Svelte 5 and Go, showcasing projects, skills, and professional experience.

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

- ✨ Modern, responsive design
- 🎨 Dark mode support
- ⚡ Fast page loads with SSR
- 📱 Mobile-first approach
- 🔄 Interactive resume
- 📬 Contact form with email integration
- 🎯 Project showcase with filtering
- 🏃 Smooth animations and transitions

## Getting Started

### Prerequisites
- Node.js 18+
- Go 1.21+
- npm or yarn

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
│   │   ├── stores/        # Svelte stores
│   │   └── utils/         # Helper functions
│   ├── routes/            # SvelteKit routes
│   └── app.css           # Global styles
├── backend/               # Go backend
│   ├── cmd/              # Application entrypoints
│   └── internal/         # Internal packages
│       ├── handlers/     # HTTP handlers
│       ├── models/       # Data models
│       └── services/     # Business logic
├── static/               # Static assets
└── package.json         # Project configuration
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Backend
PORT=8080
DATABASE_URL=postgresql://...

# Email Service (for contact form)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```

## License

MIT