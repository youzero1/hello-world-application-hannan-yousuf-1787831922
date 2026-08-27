---
status: implemented
title: Hello World Application
---

1. Create the project configuration files at the root: `package.json` (React, React DOM, TanStack Router, Vite, TypeScript, Tailwind CSS v4, `@tailwindcss/vite`, `@tanstack/router-plugin` as dependencies, plus `dev`/`build`/`preview` scripts), `tsconfig.json` and `tsconfig.node.json` (strict TypeScript, with the `@/*` path alias pointing at `src/*`), and `vite.config.ts` (React plugin, `@tailwindcss/vite` plugin, TanStack Router file-based routing plugin, and the `@` alias resolution).
   - Expected outcome: `npm install` succeeds and `npm run dev` can start a dev server with routing and styling wired up.

2. Create `index.html` at the root with a root mount element, a page title of "Hello World", and a module script tag pointing at `src/main.tsx`.
   - Expected outcome: the browser has a valid entry document for Vite to serve.

3. Create `src/styles/global.css` containing exactly the single Tailwind import line and nothing else.
   - Expected outcome: all Tailwind utility classes become available across the app.

4. Create `src/main.tsx` as the application entry point: import the global stylesheet once, create the router from the generated route tree, and render the router provider into the root element using React's strict mode.
   - Expected outcome: the app boots and renders the matched route.

5. Create `src/routes/__root.tsx` as the app shell: a root route that renders a full-height page container with a neutral background and a centered outlet for child routes.
   - Expected outcome: every page in the app is vertically and horizontally centered on a clean background.

6. Create `src/routes/index.tsx` as the home route for `/`: a centered card containing a large "Hello World" heading, a short friendly subtitle line beneath it, and a small decorative accent (for example a colored dot or gradient bar) above the heading, all styled with Tailwind utilities and readable at both mobile and desktop widths.
   - Expected outcome: visiting the site shows a polished, centered "Hello World" greeting card.

7. Create `src/components/Greeting.tsx` as a small reusable presentational component that takes a name and renders the greeting heading and subtitle, then use it from `src/routes/index.tsx` with the name "World".
   - Expected outcome: the greeting text lives in one reusable place, making it trivial to later change the name or reuse the greeting on other pages.

8. Add a `.gitignore` at the root covering `node_modules`, `dist`, local environment files, and the generated `src/routeTree.gen.ts` artifact handling as appropriate.
   - Expected outcome: build output and dependencies stay out of version control.

9. Verify the result: run the dev server, confirm the page loads at the root URL with no console errors, confirm the heading is centered and responsive, and confirm the production build completes successfully.
   - Expected outcome: a working, styled Hello World application that builds cleanly.
