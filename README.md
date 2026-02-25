# Sean Crisman — Portfolio

Modern, minimalist portfolio for Sean Crisman: product design leader (AI platforms, enterprise systems, design systems).

## Tech stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**-style components (Button, Badge, Card, Input)
- Deploy via **Vercel**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Password protection (work case studies)

Routes under `/work` and `/work/*` are protected. Set the env var:

```bash
PORTFOLIO_PASSWORD=your-secret-password
```

- **Local:** create `.env.local` with `PORTFOLIO_PASSWORD=...`
- **Vercel:** Project → Settings → Environment Variables → add `PORTFOLIO_PASSWORD`

Users hitting `/work` without access are redirected to `/unlock`. After entering the correct password, a cookie is set and they can view case studies. Rotate the password by changing the env var and redeploying.

## Deploy (Vercel)

1. Push to GitHub.
2. In [Vercel](https://vercel.com), import the repo.
3. Add `PORTFOLIO_PASSWORD` in project Environment Variables.
4. Deploy. Optionally attach a custom domain in Project Settings.
