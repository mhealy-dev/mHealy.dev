# Cloudflare Deployment Guide

Your portfolio is now configured for deployment at your custom domain `mhealy.dev` using Cloudflare hosting.

## ✅ Configuration Changes Made

### 1. **Removed Base Path**
- Removed the `/mHealy.dev` base path configuration
- All internal links now use root paths (`/`, `/about`, `/projects`, etc.)
- Site will work correctly at `https://mhealy.dev`

### 2. **Updated All Links**
- **Navigation**: All menu items use root paths
- **Hero Section**: Buttons link to `/projects` and `/contact`
- **Projects Section**: "View All Projects" links to `/projects`
- **About Page**: CTA buttons link to `/contact` and `/projects`
- **Projects Page**: CTA buttons link to `/contact` and `/resume`

### 3. **Static Build Ready**
- Using `@sveltejs/adapter-static` for static site generation
- All pages pre-rendered for optimal performance
- Build output in `build/` directory

## 🚀 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. **Connect Git Repository**:
   - Go to Cloudflare Dashboard > Pages
   - Connect your GitHub repository
   - Select `mhealy-dev/mHealy.dev` repository

2. **Build Settings**:
   ```
   Build command: npm run build
   Build output directory: build
   Node.js version: 18
   ```

3. **Custom Domain**:
   - Add `mhealy.dev` as custom domain
   - Cloudflare will automatically handle SSL/TLS

### Option 2: Manual Upload

1. **Build the Site**:
   ```bash
   npm run build
   ```

2. **Upload Build Directory**:
   - Upload contents of `build/` folder to Cloudflare
   - Ensure `index.html` is in the root

### Option 3: Cloudflare Workers (Advanced)

For dynamic features in the future, you can deploy as a Cloudflare Worker with SvelteKit adapter.

## 📋 DNS Configuration

Ensure your domain DNS is pointed to Cloudflare:

```
Type: CNAME
Name: mhealy.dev
Target: mhealy-dev.github.io (or Cloudflare's target)
```

## 🔧 Environment Variables

No environment variables needed for the static build. All functionality works client-side:

- ✅ Contact form (uses `mailto:`)
- ✅ PDF generation (client-side jsPDF)
- ✅ Interactive components
- ✅ Responsive design
- ✅ Synthwave animations

## 📊 Your Site URLs

- **Homepage**: `https://mhealy.dev/`
- **About**: `https://mhealy.dev/about`
- **Projects**: `https://mhealy.dev/projects`
- **Resume**: `https://mhealy.dev/resume`
- **Contact**: `https://mhealy.dev/contact`

## ⚡ Performance Features

- **Static Generation**: All pages pre-rendered
- **Optimized Assets**: CSS and JS minified and compressed
- **Fast Loading**: Leverages Cloudflare's global CDN
- **Caching**: Automatic edge caching for optimal speed

## 🔄 Future Updates

To update your site:

1. **Push changes** to your repository
2. **Cloudflare Pages** will auto-deploy (if connected to Git)
3. **Manual builds**: Run `npm run build` and upload new `build/` contents

## 🎯 Features Maintained

- ✅ **Synthwave Design**: Full visual experience preserved
- ✅ **Interactive Animations**: All hover effects and transitions work
- ✅ **Contact Form**: Opens email client with pre-filled data
- ✅ **PDF Resume**: Client-side generation and download
- ✅ **Projects Filtering**: Search and category filtering
- ✅ **Responsive Design**: Mobile-first approach maintained
- ✅ **Fast Performance**: Optimized for Core Web Vitals

Your portfolio is now ready for production deployment at `mhealy.dev`! 🚀