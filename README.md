<div align="center">

# Kartik Kachwahe — Portfolio

**A premium, dark-futuristic personal portfolio for a Data Scientist / ML Engineer**

Built with plain **HTML, CSS & JavaScript** — no build step, no framework, no dependencies.

[![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Made with CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Framework](https://img.shields.io/badge/Framework-None-critical?style=flat)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)


[Live Demo](https://portfolio-drab-six-98.vercel.app/) · [Report a Bug](#) · [Request a Feature](#)

</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
  - [GitHub Pages](#github-pages)
  - [Netlify / Vercel](#netlify--vercel)
- [Contact Form Setup](#-contact-form-setup)
- [Customization Guide](#-customization-guide)
- [Browser Support](#-browser-support)
- [Performance & Accessibility](#-performance--accessibility)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

| Category | Details |
|---|---|
| 🎨 **Kinetic Hero** | Canvas particle network, interactive cursor glow, 3D photo tilt, typing animation, floating tech chips |
| 🌀 **Animations** | Smooth scroll-reveal via `IntersectionObserver` + animated stat counters |
| 🌗 **Theming** | Dark / Light mode toggle with persisted preference (`localStorage`) |
| 🧩 **Sections** | Skills grid, filterable Projects gallery, editorial marquee |
| ✉️ **Contact Form** | Glassmorphism-styled form — works with **zero backend** via FormSubmit |
| 📱 **Responsive** | Fully responsive across mobile, tablet, and desktop |
| ♿ **Accessible** | Semantic markup, keyboard-navigable, `prefers-reduced-motion` aware |
| 🔍 **SEO Ready** | Meta tags, Open Graph tags, and descriptive alt text out of the box |

---

## 🛠 Tech Stack

- **Markup:** HTML5 (semantic, SEO-friendly)
- **Styling:** CSS3 (custom properties / variables, Flexbox, Grid, glassmorphism)
- **Behavior:** Vanilla JavaScript (ES6+, Canvas API, IntersectionObserver)
- **Form Backend:** [FormSubmit](https://formsubmit.co) (no server required)
- **Hosting:** Static — works on GitHub Pages, Netlify, Vercel, or any static host

No npm, no bundler, no build step. Clone it and open it.

---

## 📁 Folder Structure

.
├── index.html          # Markup & sections
├── style.css            # All styling & theme variables
├── script.js             # Data, rendering, animations, form handling
└── assets/
    ├── profile.jpg
    ├── supply.webp
    ├── movie.webp
    ├── heart.webp
    ├── hr.png
    └── Kartik_Kachwahe_Resume.pdf

---

## 🌐 Deployment

### GitHub Pages

1. Push the project files to a repository (e.g. `portfolio`).
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/root` folder.
4. Your site will be live at:
   https://<username>.github.io/<repo>/

### Netlify / Vercel

1. Import the repository into [Netlify](https://netlify.com) or [Vercel](https://vercel.com).
2. Leave the build command **empty** — this is a static site.
3. Set the publish/output directory to the project root (`/`).
4. Deploy 🎉

---

## ✉️ Contact Form Setup

The contact form uses **[FormSubmit](https://formsubmit.co)**, so it works on any static host with **zero backend**.

The target email is configured in `script.js`:

const CONTACT_EMAIL = "kartikkachwahe25@gmail.com";

> **⚠️ Important — first-time setup**
> On the **first** form submission, FormSubmit sends a one-time confirmation email to `CONTACT_EMAIL`. Click the confirmation link **once**, and every future submission will land in your inbox automatically — no further action needed.

---

## 🎨 Customization Guide

| What to change | Where |
|---|---|
| Text, links, projects, skills | Data objects at the top of `script.js` |
| Colors, fonts, spacing | CSS custom properties in `:root` and `html.light` in `style.css` |
| Photo, resume, project images | Replace files inside `assets/` — **keep the same filenames** |
| Contact form recipient | `CONTACT_EMAIL` constant in `script.js` |

---

## 🧭 Browser Support

Tested and working on the latest stable versions of:

Chrome · Firefox · Safari · Edge

> Uses standard Canvas API and `IntersectionObserver`, both broadly supported in modern browsers.

---

## ⚡ Performance & Accessibility

- No external framework or JS runtime overhead
- Respects `prefers-reduced-motion` for users sensitive to motion
- Semantic HTML structure for screen readers
- Descriptive `alt` attributes on all imagery
- Lightweight assets (`.webp` where possible) for fast load times

---

## 🗺 Roadmap

- [ ] Add blog / writing section
- [ ] Add project case-study pages
- [ ] Add analytics integration (privacy-friendly)
- [ ] Add multi-language support

Have an idea? Feel free to open an issue or suggest a feature.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to fork, customize, and use it for your own portfolio.

---

## 📬 Contact

**Kartik Kachwahe**
📧 [kartikkachwahe25@gmail.com](mailto:kartikkachwahe25@gmail.com)

---

<div align="center">

Made with ⚡ and a lot of `:root` CSS variables.

</div>
