# Liworiz Calamba

An informational web application built using React and Tailwind CSS. The primary objective of this project was to learn modern frontend tooling, component architecture, and AI-assisted engineering workflows.

## Purpose

This project was built to practice:
- Setting up a modern build toolchain using React 18, Vite, and Tailwind CSS v4.
- Structuring a web application with component-driven design and dynamic view management.
- Multi-agent AI orchestration: using Gemini to define system architecture, file structures, and design constraints, and Claude to execute component logic.
- Setting up continuous deployment using GitHub and Vercel.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel
- **Architecture & Prompting:** Gemini
- **Code Generation:** Claude

## Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, Footer)
├── pages/          # Content views (HomeAfterYears, FurorNoli, Protesta, Depart)
├── App.jsx         # Main layout and view router
└── main.jsx        # Application entry point
```

## AI Engineering Workflow

1. **System Design (Gemini):** Used to plan the project structure, define component relationships, and draft design rules (avoiding standard AI design patterns).
2. **Code Execution (Claude):** Used to generate clean, modular React components adhering to the predefined structure and design constraints.
3. **Deployment Pipeline:** Managed version control via Git/GitHub and configured continuous deployment on Vercel.

## Local Setup

```bash
git clone https://github.com/airuz4/liworiz-calamba.git
cd liworiz-calamba
npm install
npm run dev
```

## Future Improvements

- Replace state-based view switching with `react-router-dom` for browser URL navigation.
- Move static document data to a headless CMS or backend API.
- Add search functionality across document sections.