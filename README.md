# Susmita Kirttonia — AI Engineer Portfolio

React + TypeScript + Vite + React Three Fiber.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
```

## Customise
- All text/projects/skills live in `src/data.ts`. Edit email, socials and project links there.
- Your photo: `public/susmita.webp` (transparent cutout). Replace with another cutout of the same name.
- Colors: CSS variables at the top of `src/styles.css`.
- Contact form only simulates sending. Connect it in `Contact()` inside `src/pages.tsx` (Formspree, Resend, etc.).

## Deploy
### GitHub Pages
The GitHub Actions workflow builds and deploys this portfolio to GitHub Pages. Create a public repository named `susmita-portfolio-final`, push the project to its `main` branch, then set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

After the workflow completes, the site will be available at `https://<your-github-username>.github.io/susmita-portfolio-final/`. The build includes an SPA fallback so routes such as `/about` continue to work when opened directly.
