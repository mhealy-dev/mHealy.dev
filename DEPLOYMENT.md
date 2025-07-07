# Deployment Guide

## Cloudflare Workers Deployment

Your portfolio is configured for deployment on Cloudflare Workers at: `https://mhealy.dev/`

For detailed deployment instructions, see [CLOUDFLARE-WORKERS-DEPLOYMENT.md](./CLOUDFLARE-WORKERS-DEPLOYMENT.md)

## Quick Start

```bash
# Login to Cloudflare
wrangler login

# Deploy to Workers
npm run deploy
```

## Local Development

```bash
# Standard development server
npm run dev

# Test in Workers environment
npm run workers:preview
```

## Features

All portfolio features work on Cloudflare Workers:
- ✅ Synthwave design and animations
- ✅ Interactive components
- ✅ Client-side PDF generation (jsPDF)
- ✅ Contact form (mailto)
- ✅ Project filtering and search
- ✅ Responsive design
- ✅ Edge computing with global distribution
- ✅ Zero cold starts
- ✅ Automatic scaling

Your site runs on Cloudflare's global edge network for optimal performance worldwide.