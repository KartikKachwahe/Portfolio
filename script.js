/* =========================================================
   Kartik Kachwahe — Portfolio  (vanilla JS)
   ========================================================= */

/* ---------- Data ---------- */
const ROLES = ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "AI Enthusiast"];

const SKILLS = [
  { group: "Core ML & AI", icon: "brain", items: ["Machine Learning", "Scikit-learn", "XGBoost", "Gradient Boosting", "NLP (TF-IDF, Cosine Similarity)", "Predictive Modeling"] },
  { group: "Languages & Data", icon: "braces", items: ["Python", "SQL", "Pandas", "NumPy", "Feature Engineering", "EDA"] },
  { group: "Visualization", icon: "bar-chart-3", items: ["Power BI", "Plotly / Dash", "Matplotlib", "Seaborn", "Tableau", "Excel"] },
  { group: "Tools & Platforms", icon: "wrench", items: ["Git", "GitHub", "Streamlit", "Jupyter", "AWS"] },
];

const PROJECTS = [
  { id: "supply", title: "DataCo Smart Supply Chain Analytics", category: "Analytics",
    description: "End-to-end analysis of 180K+ supply chain transactions with interactive Dash dashboards plus late-delivery and fraud-detection models driving logistics recommendations.",
    tech: ["Python", "Plotly Dash", "SQL", "Gradient Boosting"], image: "assets/supply.webp",
    github: "https://github.com/KartikKachwahe/Dataco-Supply-Chain-app", demo: "https://dataco-supply-chain-app-2k7ehatnvvnx66fycyedp3.streamlit.app/" },
  { id: "movie", title: "Movie Recommendation System", category: "ML",
    description: "Content-based recommendation engine using TF-IDF vectorization and cosine similarity, with keyword search, autocomplete and a rich movie details experience.",
    tech: ["Python", "NLP", "Scikit-learn", "Streamlit"], image: "assets/movie.webp",
    github: "https://github.com/KartikKachwahe/Movie-Recommendation-System",
    demo: "https://movie-recommendation-system-tbwgaistgz6uotqvtjmbuw.streamlit.app" },
  { id: "heart", title: "Heart Disease Prediction", category: "ML",
    description: "Benchmarked 5 classifiers on 918 patient records; KNN reached 88.6% accuracy and 0.899 F1. Deployed a real-time single-patient risk prediction web app.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"], image: "assets/heart.webp",
    github: "https://github.com/KartikKachwahe/Heart-Disease-Prediction-Model",
    demo: "https://heart-disease-prediction-model-xmevu2ud8czkmysmup6uak.streamlit.app" },
  { id: "hr", title: "HR Attrition Analytics", category: "Analytics",
    description: "Explored employee attrition drivers through statistical analysis and dashboards, surfacing the factors most correlated with churn to guide retention strategy.",
    tech: ["Python", "Power BI", "Pandas", "EDA"], image: "assets/hr.png",
    github: "https://github.com/KartikKachwahe/HR-EMPLOYEE-ATTRITIONS-ANALYSIS", demo: "" },
];

const FILTERS = ["All", "ML", "Analytics"];

/* Change this to your own email if you fork the project */
const CONTACT_EMAIL = "kartikkachwahe25@gmail.com";

/* ---------- Helpers ---------- */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const refreshIcons = () => window.lucide && window.lucide.createIcons();
let revealObserver = null;

/* Brand icons (lucide dropped these) — inline SVG */
const GH_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>';

/* ---------- Year ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- Theme ---------- */
const root = document.documentElement;
const themeToggle = $("#theme-toggle");
const setTheme = (t) => {
  root.classList.toggle("light", t === "light");
  root.classList.toggle("dark", t === "dark");
  localStorage.setItem("kk-theme", t);
  themeToggle.innerHTML = t === "dark" ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
  refreshIcons();
};
setTheme(localStorage.getItem("kk-theme") || "dark");
themeToggle.addEventListener("click", () =>
  setTheme(root.classList.contains("light") ? "dark" : "light")
);

/* ---------- Nav scroll + mobile menu ---------- */
const nav = $("#nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 20));
const mobileMenu = $("#mobile-menu");
$("#menu-btn").addEventListener("click", () => mobileMenu.classList.toggle("open"));
$$("#mobile-menu a").forEach((a) => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

/* ---------- Render skills ---------- */
$("#skills-grid").innerHTML = SKILLS.map((g) => `
  <div class="skill-card glass reveal">
    <div class="skill-head">
      <span class="skill-ico"><i data-lucide="${g.icon}"></i></span>
      <h3 class="font-display">${g.group}</h3>
    </div>
    <div class="chips">
      ${g.items.map((s) => `<span class="tag">${s}</span>`).join("")}
    </div>
  </div>`).join("");

/* ---------- Render projects + filters ---------- */
const filtersEl = $("#filters");
const gridEl = $("#projects-grid");
let activeFilter = "All";

const cardHTML = (p) => `
  <article class="project glass" data-cat="${p.category}">
    <div class="project-thumb">
      <span class="project-cat glass">${p.category}</span>
      <img src="${p.image}" alt="${p.title}" loading="lazy" />
    </div>
    <div class="project-body">
      <h3 class="font-display">${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="project-links">
        <a href="${p.github}" target="_blank" rel="noopener" class="link-btn">${GH_SVG} Code</a>
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="link-btn demo"><i data-lucide="external-link"></i> Live Demo</a>` : ""}
      </div>
    </div>
  </article>`;

const renderProjects = () => {
  const list = activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);
  gridEl.innerHTML = list.map(cardHTML).join("");
  refreshIcons();
  observeReveal();
};

filtersEl.innerHTML = FILTERS.map((f) => `<button class="filter ${f === "All" ? "active" : ""}" data-f="${f}">${f}</button>`).join("");
$$(".filter").forEach((b) =>
  b.addEventListener("click", () => {
    activeFilter = b.dataset.f;
    $$(".filter").forEach((x) => x.classList.toggle("active", x === b));
    renderProjects();
  })
);
renderProjects();

/* ---------- Marquee ---------- */
const WORDS = ["MACHINE LEARNING", "NEURAL NETWORKS", "PREDICTIVE ANALYTICS", "DATA ENGINEERING", "NLP", "DASHBOARDS"];
const marqueeInner = WORDS.map((w) => `<span>${w}<span class="dot"> • </span></span>`).join("");
$("#marquee").innerHTML = marqueeInner + marqueeInner; // duplicate for seamless loop

/* ---------- Typewriter ---------- */
(function typewriter() {
  const el = $("#typed");
  let i = 0, char = 0, deleting = false;
  const tick = () => {
    const word = ROLES[i];
    char += deleting ? -1 : 1;
    el.textContent = word.slice(0, char);
    let delay = deleting ? 40 : 90;
    if (!deleting && char === word.length) { delay = 1600; deleting = true; }
    else if (deleting && char === 0) { deleting = false; i = (i + 1) % ROLES.length; delay = 400; }
    setTimeout(tick, delay);
  };
  tick();
})();

/* ---------- Counters ---------- */
function animateCount(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || "";
  const dur = 1600, start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(step);
}

/* ---------- Reveal + counters via IntersectionObserver ---------- */
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          const num = e.target.querySelector?.("[data-count]");
          if (num && !num.dataset.done) { num.dataset.done = "1"; animateCount(num); }
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "-40px" });
  }
  $$(".reveal:not(.in)").forEach((el) => revealObserver.observe(el));
}
observeReveal();

/* ---------- Hero FX: interactive particles + smooth trailing glow + tilt ---------- */
(function heroFX() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = $("#hero");
  const glow = $("#cursor-glow");
  const photo = $("#photo-wrap");
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const R = 170; // cursor influence radius
  const mouse = { x: -9999, y: -9999, tx: -1000, ty: -1000 };
  let w, h, parts;

  const resize = () => {
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * DPR; canvas.height = h * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const count = Math.min(90, Math.floor((w * h) / 16000));
    parts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.6 + .6,
    }));
  };
  resize();
  window.addEventListener("resize", resize);

  let gx = -1000, gy = -1000;
  const draw = () => {
    // smooth trailing glow
    gx += (mouse.tx - gx) * .16; gy += (mouse.ty - gy) * .16;
    glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;

    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      const dxm = mouse.x - p.x, dym = mouse.y - p.y, dm = Math.hypot(dxm, dym);
      let near = 0;
      if (dm < R) { near = 1 - dm / R; p.x += (dxm / dm) * near * .6; p.y += (dym / dm) * near * .6; }

      ctx.beginPath(); ctx.arc(p.x, p.y, p.r + near * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(148,205,235,${.5 + near * .5})`; ctx.fill();

      if (near > 0) {
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(6,182,212,${.28 * near})`; ctx.lineWidth = .7; ctx.stroke();
      }
      for (let j = i + 1; j < parts.length; j++) {
        const q = parts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(37,99,235,${.16 * (1 - d / 120)})`; ctx.lineWidth = .6; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };

  if (prefersReduced) return;
  draw();

  // Global cursor: particles + glow react across the whole page
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX; mouse.y = e.clientY; mouse.tx = e.clientX; mouse.ty = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = -9999; mouse.y = -9999; mouse.tx = -1000; mouse.ty = -1000;
  });

  // Hero-only: premium photo tilt
  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
    photo.style.transform = `perspective(1000px) rotateY(${nx * -10}deg) rotateX(${ny * 10}deg)`;
  });
  hero.addEventListener("mouseleave", () => {
    photo.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
  });
})();

/* ---------- Toast ---------- */
const toast = (msg, err = false) => {
  const el = document.createElement("div");
  el.className = "toast" + (err ? " err" : "");
  el.textContent = msg;
  $("#toast").appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; el.style.transition = "opacity .4s"; setTimeout(() => el.remove(), 400); }, 3800);
};

/* ---------- Contact form (FormSubmit — no backend needed) ----------
   FormSubmit sends form data to your email with zero backend.
   On the FIRST submission it emails YOU a one-time confirmation link —
   click it once and all future messages arrive automatically.               */
$("#contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = $("#submit-btn");
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name || !data.email || !data.message) { toast("Please fill in your name, email and message.", true); return; }
  btn.disabled = true;
  const original = btn.innerHTML;
  btn.innerHTML = '<i data-lucide="loader-2"></i> Sending...'; refreshIcons();
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: data.name, email: data.email,
        _subject: data.subject || "New message from portfolio",
        message: data.message, _template: "table",
      }),
    });
    const json = await res.json();
    if (json.success === "true" || json.success === true) {
      toast("Message sent! I'll get back to you soon.");
      form.reset();
    } else { throw new Error("failed"); }
  } catch (_) {
    toast("Couldn't send right now — please email me directly.", true);
  } finally {
    btn.disabled = false; btn.innerHTML = original; refreshIcons();
  }
});

/* ---------- Init icons ---------- */
refreshIcons();
