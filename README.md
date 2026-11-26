# I CAN SPECIAL NEEDS FOUNDATION – Website

A static, single-page website (hash-routed: `#home`, `#about-us`, `#team`, `#gallery`, `#faq`, `#donate`, `#contact`).
No framework, no build step, no dependencies to install.

## Flat structure
Everything sits in the project root – **there are no sub-folders**, and every reference in `index.html` is a plain filename.

| Type | Files |
|---|---|
| Page | `index.html` |
| Styles | `soloist-styles.css`, `bootstrap.min.css`, `fonts.css`, `layout-overrides.css`, `utilities.css`, `team.css`, `base.css`, `donate-gallery-contact.css` |
| Scripts | `bootstrap.bundle.min.js` (Bootstrap 5.3.8, bundled), `gallery-carousel.js`, `contact-form.js`, `menu-toggle.js`, `copy-account.js`, `resize.js`, `router.js`, `lightbox.js`, `background-blur.js` |
| Images | all `.jpg` / `.png` files (logo, favicon, team, gallery, backgrounds, icons) |
| Video | `launch.mp4` (12.8 MB) |
| Config | `_headers` (cache rules, Cloudflare Pages), `package.json`, `.gitignore` |

**Keep the load order of the `<link>` and `<script>` tags in `index.html`** – the styles cascade and scripts run in that order.

## Dependencies
- None to install. Bootstrap is included as `bootstrap.bundle.min.js` and `bootstrap.min.css`.
- Fonts (Shantell Sans, Nunito Sans) load from Google Fonts via a `<link>` in `index.html`; this needs internet access for visitors. If the fonts are blocked the site falls back to `sans-serif`.

## Run locally
Open `index.html` in a browser, or serve the folder:
```
python3 -m http.server 8000      # then visit http://localhost:8000
```

## Deploy to Cloudflare Pages via GitHub
1. **Create a GitHub repository** (e.g. `ican-website`) and upload all files in this folder to the repository root (drag-and-drop on github.com works, or use git):
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ican-website.git
   git push -u origin main
   ```
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, authorise GitHub and choose the repository.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`  (the repository root)
   - No environment variables are needed.
4. Click **Save and Deploy**. The site goes live at `https://<project-name>.pages.dev`. Every later `git push` redeploys automatically.
5. **Custom domain:** project → **Custom domains → Set up a domain** and follow the DNS prompts.

## Limits & notes
- Cloudflare Pages allows files up to 25 MiB each; the largest file here is `launch.mp4` (12.8 MB), so it is fine.
- GitHub rejects files over 100 MB (not an issue here).
- To change content, edit `index.html`. To swap a photo, replace the image file keeping the same filename.
- Contact form: it opens the visitor's email app addressed to info@icanspecialneeds.org (a `mailto:` link), so no server is needed. To receive submissions directly instead, connect a form service (e.g. Formspree) later.
