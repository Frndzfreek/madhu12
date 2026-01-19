# Vercel Deployment Guide

This guide will help you deploy your Madhumitha M Portfolio to Vercel.

## Prerequisites

- A GitHub/GitLab/Bitbucket account
- Your portfolio code pushed to a Git repository
- A Vercel account (free tier works great!)

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Ready for Vercel deployment"

# Add your remote repository
git remote add origin https://github.com/frndzfreek/your-portfolio-repo.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (you can use your GitHub account)
3. Click **"Add New Project"** or **"Import Project"**
4. Select your Git provider (GitHub/GitLab/Bitbucket)
5. Find and select your portfolio repository
6. Vercel will automatically detect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
7. Click **"Deploy"**
8. Wait for the build to complete (usually 1-2 minutes)
9. Your site is live! 🎉

### Step 3: Get Your Live URL

After deployment, Vercel will provide you with a URL like:
- `https://your-portfolio.vercel.app`

You can also add a custom domain in the project settings.

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# From your project root directory
vercel

# For production deployment
vercel --prod
```

Follow the prompts and your site will be deployed!

## Configuration Files

Your project already includes all necessary configuration files:

- ✅ `vercel.json` - Vercel deployment settings
- ✅ `vite.config.ts` - Build configuration
- ✅ `package.json` - Dependencies and scripts
- ✅ `.gitignore` - Files to ignore in git
- ✅ `.vercelignore` - Files to ignore during deployment
- ✅ `.npmrc` - NPM configuration

## Environment Variables (Optional)

If you need to add environment variables:

1. Go to your project on Vercel Dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add your variables (e.g., API keys)
4. Redeploy for changes to take effect

## Automatic Deployments

Once connected, Vercel will automatically:
- Deploy when you push to your main branch
- Create preview deployments for pull requests
- Build and test your code before going live

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your domain
4. Update your DNS settings as instructed
5. Wait for SSL certificate to be issued (automatic)

## Troubleshooting

### Build Fails

If your build fails:

1. Check the build logs on Vercel Dashboard
2. Ensure all dependencies are in `package.json`
3. Test locally with `npm run build`
4. Check that Node.js version is compatible (18+)

### Site Not Loading Correctly

1. Clear your browser cache
2. Check browser console for errors
3. Verify all assets are loading (check Network tab)
4. Ensure `vercel.json` rewrites are configured correctly

### Performance Optimization

Your site is already optimized with:
- ✅ Code splitting (React, Motion, UI vendors)
- ✅ Asset caching (1 year for static assets)
- ✅ Minification (esbuild)
- ✅ Security headers

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vite Documentation: [vitejs.dev](https://vitejs.dev)
- GitHub Issues: Create an issue in your repository

## Deployment Checklist

Before deploying, make sure:

- [ ] All code is committed and pushed to GitHub
- [ ] `npm run build` works locally without errors
- [ ] All links are correct (GitHub URLs, contact info)
- [ ] Images and assets load properly
- [ ] Dark/light mode works correctly
- [ ] Site is responsive on mobile devices
- [ ] All sections are complete and tested

## Post-Deployment

After successful deployment:

1. ✅ Test all navigation links
2. ✅ Check all sections load correctly
3. ✅ Verify animations work smoothly
4. ✅ Test on mobile devices
5. ✅ Share your live URL!

Your portfolio is now live at: `https://your-project.vercel.app`

---

**Need Help?** Refer to [README.md](./README.md) for local development instructions.
