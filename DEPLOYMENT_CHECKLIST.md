# Opalstack Deployment Checklist

## Pre-Deployment Steps

### 1. Build the Project Locally
```bash
npm run build
```
- Ensure build completes without errors
- Check that `dist` folder is created with all files

### 2. Verify Required Files
Ensure these directories/files are included in your upload:

**Essential Files:**
- `package.json` - Dependencies and scripts
- `package-lock.json` - Exact dependency versions
- `server/` - Backend server files
- `client/` - Frontend source files
- `shared/` - Shared schemas and types
- `attached_assets/` - **CRITICAL** - All images and assets
- `.env` - Environment variables (create from .env.example)

**Configuration Files:**
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Styling configuration
- `tsconfig.json` - TypeScript configuration
- `drizzle.config.ts` - Database configuration
- `postcss.config.js` - CSS processing

### 3. Environment Variables
Create `.env` file on server with:
```
NODE_ENV=production
DATABASE_URL=your_production_database_url
WEBHOOK_URL=your_webhook_url
VITE_APP_TITLE=LeveL7 - Less Busywork. More Business.
# Remove PORT=5000 for production (let Opalstack assign)
```

## Upload Process

### 1. File Upload Methods
**Option A: File Manager**
- Use Opalstack control panel file manager
- Upload as ZIP and extract
- Verify all directories are preserved

**Option B: Git Clone**
```bash
git clone https://github.com/LeveL7LLC/LeveL7_Website_OnePage.git
cd LeveL7_Website_OnePage
```

**Option C: SFTP/SCP**
- Use FileZilla or similar
- Maintain directory structure

### 2. Critical Directory Structure
Ensure this structure exists on server:
```
/home/vertex21/apps/l7_website_node/level7web/
├── attached_assets/
│   ├── L7-LOGO_72dpi_500px_no-bkgrnd_1757993938191.png
│   ├── L7-LOGO_Heptagon_no-tagline_no-background_72dpi (Custom)_1757993938191.png
│   ├── SurrealDB_Screenshot_2025-09-15_1757989225594.png
│   └── generated_images/
│       └── Professional_tech_workspace_hero_image_5694d2d0.png
├── client/
├── server/
├── shared/
├── package.json
└── .env
```

### 3. File Permissions
Set correct permissions:
```bash
chmod 755 attached_assets/
chmod 644 attached_assets/*
chmod 644 attached_assets/generated_images/*
```

## Post-Upload Steps

### 1. Install Dependencies
```bash
cd /home/vertex21/apps/l7_website_node/level7web
npm install
```

### 2. Build Application
```bash
npm run build
```

### 3. Start Application
```bash
npm start
```

## Troubleshooting

### Build Errors

**"Could not load attached_assets/..." Error:**
1. Verify `attached_assets/` directory exists
2. Check file permissions (644 for files, 755 for directories)
3. Ensure exact filename matches (case-sensitive)
4. Verify path structure: `attached_assets/generated_images/Professional_tech_workspace_hero_image_5694d2d0.png`

**Module Resolution Errors:**
1. Run `npm install` to ensure all dependencies are installed
2. Check Node.js version compatibility
3. Verify `node_modules/` was created properly

**Permission Errors:**
```bash
chmod -R 755 /home/vertex21/apps/l7_website_node/level7web
chmod 644 /home/vertex21/apps/l7_website_node/level7web/attached_assets/*
```

### Runtime Errors

**Port Conflicts:**
- Remove `PORT=5000` from `.env` file
- Let Opalstack assign the port automatically

**Database Connection:**
- Verify `DATABASE_URL` in `.env` file
- Ensure database is accessible from Opalstack

## Verification Steps

1. **Build Success:** `npm run build` completes without errors
2. **Assets Loading:** All images load correctly in browser
3. **API Endpoints:** Contact form and other API calls work
4. **Database:** Data persistence functions properly
5. **SSL/HTTPS:** Site loads securely with proper certificates

## Quick Fix for Current Issue

The immediate fix for your current build error:

1. **Verify file exists:**
   ```bash
   ls -la /home/vertex21/apps/l7_website_node/level7web/attached_assets/generated_images/
   ```

2. **If missing, upload the file:**
   - Download from GitHub: `attached_assets/generated_images/Professional_tech_workspace_hero_image_5694d2d0.png`
   - Upload to exact path on server

3. **Rebuild:**
   ```bash
   npm run build
   ```

The updated HeroSection component now includes fallback handling, so even if the image is missing, the site will still build and display with a gradient background.