# Sushyam Nagallapati — Portfolio

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast dev and production builds
- **Tailwind CSS** for styling
- **shadcn/ui** for accessible UI primitives
- **React Router** for client-side routing
- **LogRocket** for session analytics

## Getting Started

```sh
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui base components
│   ├── Header.tsx
│   ├── HeroContent.tsx
│   ├── ProfileCard.tsx
│   ├── TechStackStrip.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── hooks/           # Custom React hooks
├── pages/           # Route-level page components
│   ├── Index.tsx
│   └── Projects.tsx
├── utils/           # Utility functions
└── index.css        # Global styles and CSS variables
```

## Deployment

Deployed on Vercel. To deploy:

```sh
vercel deploy --prod
```
