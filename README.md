# React 19 Context — Modern State Management Tutorial

Een moderne, interactieve demo-app die de nieuwe **React 19 Context API** demonstreert met de `use()` hook. Gebouwd als onderdeel van de Coding in Flow tutorial serie.

## Features

- ⚛️ **React 19 `use()` Hook** — Context consumeren met promise-support
- 🌗 **Dark/Light Mode** — Theme toggle met `next-themes` en geanimeerde iconen
- 🎨 **Modern Design** — Indigo/paars kleurenpalet, glassmorphism, gradients
- ✨ **Framer Motion Animaties** — Page transitions, scroll-triggered animaties, stagger effects
- 🧩 **shadcn/ui Componenten** — Herbruikbare Button, Card, en Skeleton componenten
- 📱 **Responsive** — Volledig responsive layout voor alle schermgroottes
- 🔒 **Type-Safe** — Volledige TypeScript-ondersteuning door de hele stack

## Tech Stack

| Technologie | Versie |
|-------------|--------|
| [Next.js](https://nextjs.org) | 16 |
| [React](https://react.dev) | 19 |
| [TypeScript](https://typescriptlang.org) | 6 |
| [Tailwind CSS](https://tailwindcss.com) | 4 |
| [shadcn/ui](https://ui.shadcn.com) | — |
| [Framer Motion](https://framer.com/motion) | 12 |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 |
| [Lucide Icons](https://lucide.dev) | 1.22 |

## Projectstructuur

```
src/
├── app/
│   ├── globals.css          # CSS variabelen, glassmorphism utilities
│   ├── layout.tsx           # Root layout met ThemeProvider & AuthProvider
│   └── page.tsx             # Homepage (hero, stats, profiel)
├── components/
│   ├── animations/          # Framer Motion herbruikbare animaties
│   │   ├── animated-section.tsx
│   │   └── index.ts
│   ├── auth/                # Authenticatie-gerelateerde componenten
│   │   ├── greeting.tsx
│   │   ├── sign-out-button.tsx
│   │   └── index.ts
│   ├── layout/              # Pagina-layout componenten
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── index.ts
│   ├── profile/             # User profiel feature
│   │   ├── user-info.tsx
│   │   ├── user-profile.tsx
│   │   ├── user-profile-loader.tsx
│   │   └── index.ts
│   ├── theme/               # Dark/light mode
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   └── index.ts
│   └── ui/                  # shadcn/ui basiscomponenten
│       ├── button.tsx
│       ├── card.tsx
│       ├── skeleton.tsx
│       └── index.ts
├── context/
│   └── auth-provider.tsx    # React 19 Context + use() hook
└── lib/
    ├── auth.ts              # Gesimuleerde auth service
    └── utils.ts             # cn() utility voor classnames
```

## Getting Started

### Vereisten

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installatie

```bash
# 1. Clone de repository
git clone <repo-url>
cd react-19-context

# 2. Installeer dependencies
npm install

# 3. Start de dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Scripts

| Commando | Beschrijving |
|----------|-------------|
| `npm run dev` | Start dev server met Turbopack |
| `npm run build` | Productie build |
| `npm start` | Start productie server |
| `npm run lint` | ESLint check |
| `npm test` | Voer unit tests uit (Vitest) |
| `npm run test:watch` | Tests in watch mode |

## React 19 Context met `use()`

Deze app demonstreert de nieuwe React 19 `use()` hook voor het consumeren van Context:

```tsx
// src/context/auth-provider.tsx
"use client";
import { createContext, use } from "react";

const AuthContext = createContext<User | null>(null);

export function useAuth() {
  return use(AuthContext); // ← React 19 use() hook
}
```

De `use()` hook ondersteunt ook **promises** — React suspense't automatisch tot de promise resolved is.

---

Gebaseerd op de [Coding in Flow](https://codinginflow.com) React 19 tutorial.
