# Deployment Guide

## Current Configuration: Cloudflare Hosting

Your portfolio is now configured for deployment at: `https://mhealy.dev/`

For Cloudflare-specific deployment instructions, see [CLOUDFLARE-DEPLOYMENT.md](./CLOUDFLARE-DEPLOYMENT.md)

---

## Alternative: GitHub Pages

If you want to use GitHub Pages instead, your portfolio was previously configured for deployment at: `https://mhealy-dev.github.io/mHealy.dev/`

## Changes Made for GitHub Pages Compatibility

### 1. Static Site Generation
- Changed from `@sveltejs/adapter-auto` to `@sveltejs/adapter-static`
- Added `export const prerender = true` to force static generation
- Configured to build static files to `build/` directory
- Added base path configuration for GitHub Pages subdirectory (`/mHealy.dev`)

### 2. API Routes Removed
- Removed `/api/*` routes that required server-side functionality
- Updated contact form to use `mailto:` links instead of API submission
- Changed PDF generation to client-side only (removed server-side Puppeteer)

### 3. Contact Form Updates
- Now uses `mailto:` with pre-filled form data
- Opens user's default email client with structured message
- Provides clear feedback about the email process

### 4. PDF Generation Updates
- Removed server-side Puppeteer PDF generation
- Now uses client-side jsPDF for resume downloads
- Maintains professional formatting optimized for ATS

### 5. URL Structure Updates
- All internal links now use the `base` path from `$app/paths`
- URLs will work correctly with GitHub Pages subdirectory structure
- Navigation, buttons, and links automatically adapt to deployment environment

## GitHub Repository Setup

1. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: "GitHub Actions"
   - The workflow will handle deployment automatically

2. **Repository Structure**:
   ```
   ├── .github/workflows/deploy.yml  # Deployment workflow
   ├── build/                        # Generated static files (ignored)
   ├── src/                          # Source code
   └── package.json                  # Dependencies
   ```

## Deployment Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. **Checkout** the repository
2. **Install Node.js** and dependencies
3. **Build** the static site with `npm run build`
4. **Deploy** to GitHub Pages automatically

## Manual Deployment Steps

If you prefer manual deployment:

```bash
# Build the static site
npm run build

# The build/ directory contains all static files
# Upload contents to your hosting provider
```

## Environment Considerations

### What Works on GitHub Pages:
- ✅ Static HTML, CSS, JavaScript
- ✅ Client-side PDF generation (jsPDF)
- ✅ Email contact via mailto links
- ✅ Interactive components and animations
- ✅ Responsive design and synthwave effects

### What Doesn't Work:
- ❌ Server-side API routes
- ❌ Go backend functionality
- ❌ Server-side PDF generation (Puppeteer)
- ❌ Email sending via SMTP
- ❌ Database connections

## Alternative Hosting Options

If you need server-side functionality:

1. **Vercel** - Supports SvelteKit with API routes
2. **Netlify** - Supports serverless functions
3. **Railway/Render** - Full-stack hosting with Go backend
4. **AWS/DigitalOcean** - VPS hosting with complete control

## Local Development

For local development with the GitHub Pages build:

```bash
# Install dependencies
npm install

# Development server (frontend only)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## SEO and Performance

The static build includes:
- Pre-rendered HTML for all pages
- Optimized assets and code splitting
- Fast loading times
- SEO-friendly URLs
- Mobile-responsive design

## Custom Domain Setup

To use a custom domain:

1. Add a `CNAME` file to the `static/` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Limitations and Considerations

1. **Contact Form**: Uses mailto links instead of direct submission
2. **PDF Generation**: Client-side only (larger bundle size)
3. **No Backend**: All data is static/hardcoded
4. **No Email Service**: Cannot send emails automatically

The site is now optimized for GitHub Pages static hosting while maintaining all visual and interactive features.