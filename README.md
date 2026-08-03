# Kartik Kachwahe — Portfolio

A premium, dark-futuristic personal portfolio for a Data Scientist / ML Engineer.
Built with **plain HTML, CSS and JavaScript** — no build step, no framework. Just open
`index.html` or deploy the folder anywhere (GitHub Pages, Netlify, Vercel).

## Features
- Kinetic hero: canvas particle network, interactive cursor glow, 3D photo tilt, typing animation, floating tech chips
- Smooth scroll-reveal animations (IntersectionObserver) + animated stat counters
- Dark / Light theme toggle (remembers your choice)
- Skills, filterable Projects gallery, editorial marquee
- Glassmorphism contact form (works with **no backend** via FormSubmit)
- Fully responsive, SEO meta tags, accessible, `prefers-reduced-motion` aware

## Folder structure
```
.
├── index.html          # markup + sections
├── style.css           # all styling & theme variables
├── script.js           # data, rendering, animations, form handling
└── assets/
    ├── profile.jpg
    ├── supply.webp
    ├── movie.webp
    ├── heart.webp
    ├── hr.png
    └── Kartik_Kachwahe_Resume.pdf
```

## Run locally
Just open `index.html` in a browser, or serve it:
```bash
python -m http.server 8080
# then visit http://localhost:8080
```

## Deploy on GitHub Pages
1. Push these files to a repo (e.g. `portfolio`).
2. Repo → **Settings → Pages** → Source: `main` branch, `/root`.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

## Contact form (important)
The form uses [FormSubmit](https://formsubmit.co) so it works on any static host with
**zero backend**. The target email is set in `script.js`:
```js
const CONTACT_EMAIL = "kartikkachwahe25@gmail.com";
```
On the **first** message, FormSubmit emails you a one-time confirmation link — click it
once, and every future submission lands in your inbox automatically.

## Customize
- **Text / links / projects / skills** → edit the data objects at the top of `script.js`.
- **Colors / fonts / spacing** → edit the CSS variables in `:root` (and `html.light`) in `style.css`.
- **Photo / resume / project images** → replace the files in `assets/` (keep the same names).
