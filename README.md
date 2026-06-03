# Wasif Nasim — Portfolio

A deep-purple tech-themed personal portfolio built with **React + TypeScript + Vite + Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
wasif-portfolio/
├── index.html                  ← Page title, meta description, favicon
├── public/
│   ├── img/
│   │   └── profile.jpg         ← ADD YOUR PHOTO HERE
│   └── documents/
│       └── resume.pdf          ← ADD YOUR RESUME HERE
└── src/
    ├── data/
    │   └── portfolioData.ts    ← ✅ MAIN FILE — edit all content here
    ├── components/
    │   ├── Hero.tsx            ← Landing section
    │   ├── About.tsx           ← About + info cards
    │   ├── Skills.tsx          ← Skills grid
    │   ├── Experience.tsx      ← Work timeline
    │   ├── Projects.tsx        ← Project cards
    │   ├── Education.tsx       ← Education cards
    │   ├── Certifications.tsx  ← Cert cards
    │   ├── Contact.tsx         ← Contact links
    │   ├── Footer.tsx          ← Footer
    │   ├── Navigation.tsx      ← Top nav
    │   ├── CustomCursor.tsx    ← Purple cursor
    │   ├── ScrollProgress.tsx  ← Top progress bar
    │   └── BackToTop.tsx       ← Scroll-to-top button
    ├── index.css               ← CSS variables (colors, theme)
    ├── App.tsx                 ← Assembles all sections
    └── main.tsx                ← React entry point
```

---

## ✏️ How to Edit Content

**All text content** (name, bio, skills, projects, etc.) lives in one file:
```
src/data/portfolioData.ts
```
Open it and edit the values — the whole site updates automatically.

---

## 🖼️ How to Add Your Profile Photo

1. Add your photo to `/public/img/` — name it `profile.jpg` (or any name)
2. Open `src/data/portfolioData.ts`
3. Set `profilePhoto: "/img/profile.jpg"` (match the filename you chose)
4. Set `usePhoto: true`

The emoji avatar will be replaced with your actual photo.

---

## 📄 How to Add Your Resume

1. Copy your resume PDF to `/public/documents/resume.pdf`
2. Open `src/data/portfolioData.ts`
3. Set `hasResume: true`

A "Download Resume" button will appear in the hero section.

---

## 🎨 How to Change Colors / Theme

Open `src/index.css` and edit the CSS variables at the top:

```css
:root {
  --bg: #07050f;           /* main background */
  --surface: #100c1e;      /* card background */
  --purple: #8a64ff;       /* main accent color */
  --purple-soft: #b99fff;  /* lighter accent */
  --gold: #f0c060;         /* secondary highlight */
  --text: #ede9ff;         /* primary text */
  --muted: #7a709a;        /* muted text */
}
```

Changing these values updates every component instantly.

---

## ➕ How to Add a New Project

Open `src/data/portfolioData.ts` and add a new entry to the `projects` array:

```ts
{
  icon: "🔥",
  year: "2026",
  name: "My New Project",
  description: "What the project does...",
  tech: ["Python", "FastAPI", "PostgreSQL"],
  link: "https://github.com/Wasifnasim/my-new-project",
  ongoing: false,
},
```

---

## 🗑️ How to Hide a Section

Open `src/App.tsx` and comment out the section you don't want:

```tsx
{/* <Skills />       */}   ← commented out = hidden
{/* <div className="divider" /> */}

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS | Utility styling |
| CSS Variables | Theming |
| Intersection Observer | Scroll animations |
