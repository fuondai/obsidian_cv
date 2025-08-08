# Obsidian Portfolio

A modern dark portfolio (obsidian vibes) for **Bui Phuong Dai** — Smart Contract Auditor.

## Quick start
```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

If you use npm:
```bash
npm i
npm run dev
```

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. Import repo on Vercel → Framework: **Next.js**.
3. No special build settings needed.  
4. (Optional) Set environment vars if you integrate analytics/contact later.

## Customize
- Edit `lib/data.json` for content.
- Colors & effects in `tailwind.config.ts` and `app/globals.css`.
- 3D scene in `components/ObsidianScene.tsx`.
