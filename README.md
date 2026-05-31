# Akheel Shibli — Portfolio

A React-based personal portfolio website.

## Project Structure

```
src/
├── data.js                  ← ✏️  EDIT ALL YOUR CONTENT HERE
├── App.js                   ← Main app, combines all sections
├── styles/
│   └── globals.css          ← Global styles & CSS variables
└── components/
    ├── Cursor.jsx / .css    ← Custom cursor
    ├── Navbar.jsx / .css    ← Navigation bar
    ├── Hero.jsx / .css      ← Hero / landing section
    ├── About.jsx / .css     ← About section
    ├── Experience.jsx / .css← Timeline experience
    ├── Projects.jsx / .css  ← Project cards
    ├── Skills.jsx / .css    ← Skills grid + certifications
    ├── Education.jsx / .css ← Education + exam scores
    ├── Contact.jsx / .css   ← Contact section
    └── Footer.jsx / .css    ← Footer
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open http://localhost:3000
```

## How to Edit Content

**All your content lives in one file: `src/data.js`**

- Update `personal` → name, email, LinkedIn, resume URL, stats
- Update `experience` → add/remove jobs
- Update `projects` → add/remove projects
- Update `skills` → add/remove skill groups
- Update `education` → degrees and exam scores

## How to Add a New Section

1. Create `src/components/NewSection.jsx` and `NewSection.css`
2. Import and add it in `src/App.js`
3. Add a nav link in `src/components/Navbar.jsx`

## Deploy to Vercel

```bash
# 1. Build the project
npm run build

# 2. Push to GitHub, connect repo on vercel.com
# Vercel auto-detects React and deploys the /build folder
```

## Customize Colors

Edit CSS variables in `src/styles/globals.css`:

```css
:root {
  --accent: #00C2FF;   /* Main blue accent */
  --gold: #F5C842;     /* Gold for badges */
  --bg: #080C14;       /* Background */
}
```
# portfolio
