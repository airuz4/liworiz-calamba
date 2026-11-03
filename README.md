# Liworiz Calamba

A modular React + Tailwind CSS web application built as an experiment in **AI-driven frontend prototyping**—focusing on structured component architecture, strict design constraints, and rapid development workflows.

## ⚡ Tech Stack & Toolchain

* **Frontend:** React 18 + Vite
* **Styling:** Tailwind CSS v4
* **AI Architecture & Prompt Engineering:** Gemini
* **AI Code Generation:** Claude
* **Deployment:** Vercel

## 📐 Architecture

```text
src/
├── components/     # Reusable layout UI (Navbar, Footer)
├── pages/          # Content modules (HomeAfterYears, FurorNoli, Protesta, Depart)
├── App.jsx         # Executive summary hub & view orchestrator
└── main.jsx        # App entry point
```

## 🧪 AI Engineering Approach

* **Architecture First:** Used Gemini to design the system directory, component tree, and construct anti-slop prompt constraints.
* **Targeted Code Generation:** Provided Claude with strict layout rules and component interfaces to generate clean `.jsx` modules on the first pass.
* **Component Isolation:** Separated pages into discrete modules inside `src/pages/` for rapid iteration without global scope creep.

## 🚀 Local Setup

```bash
# Clone & install
git clone https://github.com/airuz4/liworiz-calamba.git
cd liworiz-calamba
npm install

# Start dev server
npm run dev
```