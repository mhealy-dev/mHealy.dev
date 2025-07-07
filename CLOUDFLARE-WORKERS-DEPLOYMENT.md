# Cloudflare Workers Deployment Guide

Your portfolio is now configured for deployment on Cloudflare Workers, providing edge computing capabilities and global distribution.

## ✅ Configuration Complete

### What We've Done

1. **Installed Dependencies**
   - `@sveltejs/adapter-cloudflare` - Modern Cloudflare adapter
   - `wrangler` - Cloudflare's CLI tool
   - `@cloudflare/workers-types` - TypeScript support

2. **Updated Configuration**
   - `svelte.config.js` - Now uses Cloudflare adapter
   - `wrangler.json` - Workers configuration with Node.js compatibility
   - `src/app.d.ts` - TypeScript types for Workers platform
   - Removed static prerendering to enable dynamic edge rendering

3. **Added npm Scripts**
   - `npm run workers:dev` - Local Workers development
   - `npm run workers:preview` - Build and preview locally
   - `npm run deploy` - Deploy to Cloudflare Workers

## 🚀 Deployment Steps

### 1. Authenticate with Cloudflare
```bash
wrangler login
```

### 2. Deploy to Workers
```bash
npm run deploy
```

This will:
- Build your app with the Cloudflare adapter
- Create a worker at `mhealy-dev.workers.dev`
- Deploy globally across Cloudflare's edge network

### 3. Custom Domain Setup
To use your custom domain `mhealy.dev`:

1. In Cloudflare Dashboard, go to **Workers & Pages**
2. Select your worker `mhealy-dev`
3. Go to **Settings** > **Domains & Routes**
4. Add custom domain: `mhealy.dev`
5. Cloudflare will handle SSL/TLS automatically

## 🧪 Local Development

### Start Workers Dev Server
```bash
# Build first, then run Workers locally
npm run workers:preview
```

This runs your site in a local Workers environment at `http://localhost:8787`

### Regular Development
```bash
# Standard Vite dev server (faster for development)
npm run dev
```

## 📁 Project Structure

```
.svelte-kit/cloudflare/
├── _worker.js          # Main worker entry point
├── _app/               # Your app assets
│   ├── immutable/      # Cached assets
│   └── version.json    # Version tracking
├── _headers            # Custom headers
└── favicon.svg         # Static assets
```

## 🔧 Wrangler Configuration

Your `wrangler.json` is configured with:
- **Name**: `mhealy-dev`
- **Node.js Compatibility**: Enabled for broader API support
- **Assets**: Properly bound for serving static files
- **Compatibility Date**: Set to 2025-01-01

## 🌟 Features on Workers

All your portfolio features work on Workers:
- ✅ Synthwave design and animations
- ✅ Interactive components
- ✅ Client-side PDF generation
- ✅ Contact form (mailto)
- ✅ Project filtering and search
- ✅ Responsive design

## 🔄 Continuous Deployment

For automatic deployments from GitHub:

1. Get your Cloudflare API token:
   - Go to Cloudflare Dashboard > My Profile > API Tokens
   - Create token with "Edit Workers" permissions

2. Add to GitHub Secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID` (find in dashboard)

3. Create `.github/workflows/deploy-workers.yml`:
```yaml
name: Deploy to Cloudflare Workers
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

## 🎯 Performance Benefits

Cloudflare Workers provides:
- **Global Edge Network**: Your site runs in 300+ cities worldwide
- **Zero Cold Starts**: Always-on performance
- **Automatic Scaling**: Handles millions of requests
- **Built-in DDoS Protection**: Enterprise-grade security
- **Smart Routing**: Users connect to nearest datacenter

## 📊 Monitoring

View your Workers analytics in Cloudflare Dashboard:
- Request count and trends
- CPU time usage
- Error rates and logs
- Geographic distribution

## 🆘 Troubleshooting

### Build Issues
```bash
# Clear build cache
rm -rf .svelte-kit

# Rebuild
npm run build
```

### Deployment Issues
```bash
# Check wrangler version
wrangler --version

# View detailed logs
wrangler tail
```

### Size Limits
Workers have a 10MB compressed size limit. If you hit this:
- Review large dependencies
- Consider code splitting
- Use dynamic imports for heavy libraries

Your portfolio is now ready for global deployment on Cloudflare Workers! 🚀