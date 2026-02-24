# Lucid — AI Design Audit Platform

## Deploy to Vercel — 3 Steps

### Step 1: Get Anthropic API Key
1. Go to https://console.anthropic.com → sign up → verify phone → get $5 free credits
2. Go to API Keys → Create Key → copy it (starts with sk-ant-...)

### Step 2: Upload to GitHub
1. Create a new repo at https://github.com/new (name it lucid-ai-audit)
2. Click "uploading an existing file"
3. Drag ALL files and folders from this zip into the upload area
4. IMPORTANT: package.json must be at the ROOT of the repo, not inside a subfolder

### Step 3: Deploy on Vercel
1. Go to https://vercel.com/new
2. Import your lucid-ai-audit repo
3. Framework: Next.js (auto-detected)
4. Add Environment Variable: ANTHROPIC_API_KEY = your sk-ant-... key
5. Click Deploy → live in 60 seconds
