# Haze Clue - Frontend Application

**Haze Clue** is a web-based EEG attention monitoring platform that allows instructors and students to track cognitive attention levels in real time through connected BCI (Brain-Computer Interface) devices. This repository contains the frontend application built on Nuxt 4.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Routing and Layouts](#routing-and-layouts)
- [Authentication Flow](#authentication-flow)
- [Internationalization](#internationalization)
- [State Management](#state-management)
- [API Integration Layer](#api-integration-layer)
- [Build Optimization](#build-optimization)
- [Deployment](#deployment)
- [Coding Conventions](#coding-conventions)

---

## Tech Stack

| Category            | Technology                                                    |
| ------------------- | ------------------------------------------------------------- |
| Framework           | Nuxt 4.1.2 (Vue 3.5, Nitro 2.12, Vite 7.2)                  |
| UI Library          | @nuxt/ui v4 (Reka UI + Tailwind CSS v4)                      |
| State Management    | Pinia 3.x via @pinia/nuxt                                    |
| Internationalization| @nuxtjs/i18n 10.x (Vue I18n 11)                              |
| Data Visualization  | Chart.js 4.x + vue-chartjs 5.x                               |
| Animations          | GSAP 3.x (landing page), nuxt-aos (scroll-based)             |
| Validation          | Zod 4.x                                                      |
| Font Optimization   | @nuxt/fonts (auto-download, preload, self-hosting)            |
| Image Optimization  | @nuxt/image 1.11                                              |
| Icons               | Iconify (10 local collections: lucide, mdi, ph, etc.)         |
| Linting             | ESLint 9 via @nuxt/eslint                                     |
| Type Checking       | TypeScript 5.9, vue-tsc                                       |
| Package Manager     | pnpm 10.18                                                    |
| Runtime             | Node.js 22.x                                                  |

---

## Architecture Overview

The application follows a layered architecture that separates concerns cleanly:

```
UI Components
     |
     v
Composables (business logic)
     |
     v
Services (HTTP abstraction)
     |
     v
Stores (Pinia - state persistence)
     |
     v
Plugin: customFetch ($fetch wrapper with interceptors)
     |
     v
Nuxt Route Rules (API proxy to backend)
```

All API requests go through the `/api` proxy defined in `nuxt.config.ts` via Nitro route rules. This eliminates CORS issues in both development and production since the browser only communicates with the same origin.

---

## Project Structure

```
Haze_clue_website/
|-- app/
|   |-- app.vue                    # Root component
|   |-- app.config.ts              # Runtime app configuration (UI theme)
|   |-- assets/
|   |   `-- css/
|   |       |-- main.css           # Global styles and design tokens
|   |       |-- utilities.css      # Utility classes
|   |       `-- components.css     # Component-level global styles
|   |-- components/
|   |   |-- auth/                  # Auth forms (Login, Register, ForgotPassword, etc.)
|   |   |-- common/                # Shared layout components (AppHeader, AppFooter)
|   |   |-- dashboard/             # Dashboard feature components
|   |   |   |-- devices/           # Device management components
|   |   |   |-- help/              # Help center and FAQ
|   |   |   |-- live/              # Live session monitoring
|   |   |   |-- monitoring/        # Pre-session monitoring setup
|   |   |   |-- reports/           # Report generation and display
|   |   |   |-- sessions/          # Session management (CRUD, templates)
|   |   |   `-- settings/          # User settings (profile, password, account)
|   |   |-- landing/               # Public landing page sections
|   |   `-- ui/                    # Reusable UI primitives (BaseInput, AppImage, etc.)
|   |-- composables/
|   |   |-- useAuth.ts             # Auth orchestration (register, login, logout, OTP)
|   |   |-- useAppFetch.ts         # Route-aware async data fetching wrapper
|   |   |-- usePagination.ts       # Pagination state management
|   |   |-- useSidebar.ts          # Dashboard sidebar state
|   |   |-- useTheme.ts            # Dark/light mode toggle
|   |   `-- useUserSession.ts      # Current user session data
|   |-- layouts/
|   |   |-- dashboard.vue          # Dashboard layout (sidebar + content area)
|   |   |-- default.vue            # Default layout (minimal wrapper)
|   |   `-- landing.vue            # Landing page layout (header + footer)
|   |-- middleware/
|   |   |-- auth.ts                # Guards routes requiring authentication
|   |   `-- guest.ts               # Prevents authenticated users from accessing auth pages
|   |-- pages/
|   |   |-- index.vue              # Landing page (public)
|   |   |-- login.vue              # Login page
|   |   |-- register.vue           # Registration page
|   |   |-- forgot-password.vue    # Password recovery
|   |   |-- verify.vue             # OTP verification
|   |   |-- reset-password.vue     # Password reset
|   |   `-- dashboard/
|   |       |-- index.vue          # Dashboard home (stats, charts, quick actions)
|   |       |-- devices.vue        # Connected devices management
|   |       |-- sessions/
|   |       |   |-- index.vue      # Sessions list
|   |       |   `-- create.vue     # Create new session (multi-step wizard)
|   |       |-- live-session.vue   # Active session with real-time data
|   |       |-- live-monitoring.vue# Session monitoring (pre-start)
|   |       |-- reports.vue        # Generated reports
|   |       |-- settings.vue       # Account settings
|   |       `-- help.vue           # Help center and support
|   |-- plugins/
|   |   |-- customFetch.ts         # $fetch wrapper with auth, error handling, i18n headers
|   |   `-- user.ts                # User session initialization plugin
|   |-- schema/
|   |   |-- auth.ts                # Zod schemas for auth forms
|   |   `-- commonSchema.ts        # Shared validation schemas
|   |-- services/
|   |   `-- auth.ts                # Auth API service (HTTP calls)
|   |-- stores/
|   |   |-- auth.ts                # Auth store (token, user, session persistence)
|   |   `-- example.ts             # Example store template
|   |-- types/
|   |   |-- index.d.ts             # Global type declarations
|   |   `-- api/
|   |       |-- auth.ts            # Auth API response types
|   |       |-- pagination.ts      # Paginated response types
|   |       `-- response.ts        # Generic API response wrapper type
|   `-- utils/
|       |-- debounce.ts            # Debounce utility
|       `-- scroll.ts              # Scroll behavior utilities
|-- i18n/
|   |-- i18n.config.ts             # Vue I18n configuration
|   `-- locales/
|       |-- ar.ts                  # Arabic locale entry point
|       |-- en.ts                  # English locale entry point
|       |-- ar/                    # Arabic translation modules
|       |   |-- app.ts, auth.ts, common.ts, dashboard.ts,
|       |   |-- error.ts, landing.ts, navigation.ts, validation.ts
|       `-- en/                    # English translation modules
|           `-- (same structure as ar/)
|-- public/                        # Static assets served as-is
|-- nuxt.config.ts                 # Nuxt configuration
|-- ecosystem.config.cjs           # PM2 deployment configuration
|-- package.json
`-- tsconfig.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 22.x (see `engines` field in `package.json`)
- **pnpm** 10.18+ (specified via `packageManager` field)

### Installation

```bash
# Clone the repository
git clone https://github.com/HazeClue/Haze_clue_website.git
cd Haze_clue_website

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev
```

The development server starts at `http://localhost:3000` by default.

---

## Environment Variables

Create a `.env` file in the project root. Reference `.env.example` for all available variables:

| Variable                      | Required | Description                                    | Default                                       |
| ----------------------------- | -------- | ---------------------------------------------- | --------------------------------------------- |
| `NUXT_PUBLIC_API_BASE_URL`    | Yes      | Backend API base URL                           | --                                            |
| `NUXT_PUBLIC_APP_NAME`        | No       | Application display name                       | `Haze Clue`                                   |
| `NUXT_PORT`                   | No       | Port for the production server                 | `3000`                                        |
| `NUXT_PUBLIC_COOKIE_SECURE`   | No       | Set cookies as secure (HTTPS only)             | `true`                                        |

The API proxy is configured in `nuxt.config.ts` under `routeRules`. All `/api/**` requests are proxied to `NUXT_PUBLIC_API_BASE_URL`, which means the frontend never makes direct cross-origin requests.

---

## Available Scripts

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `pnpm dev`           | Start development server with HMR                |
| `pnpm build`         | Build for production (node-server preset)         |
| `pnpm preview`       | Preview the production build locally              |
| `pnpm lint`          | Run ESLint across the project                     |
| `pnpm lint:fix`      | Auto-fix lint issues                              |
| `pnpm typecheck`     | Run TypeScript type checking via vue-tsc          |
| `pnpm postinstall`   | Runs `nuxt prepare` (auto-runs after install)     |

---

## Routing and Layouts

### Layouts

The application uses three layouts:

| Layout        | Purpose                            | Applied To                |
| ------------- | ---------------------------------- | ------------------------- |
| `landing`     | Public-facing pages with navbar    | Landing page (`/`)        |
| `default`     | Minimal wrapper                    | Auth pages                |
| `dashboard`   | Sidebar navigation + content area  | All `/dashboard/*` routes |

### Middleware

| Middleware | Behavior                                                                 |
| ---------- | ------------------------------------------------------------------------ |
| `auth`     | Redirects unauthenticated users to `/login?redirect=<intended-path>`     |
| `guest`    | Redirects authenticated users to `/dashboard`                            |

Usage in any page:

```vue
<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
</script>
```

---

## Authentication Flow

Authentication follows a strict layered pattern:

```
Vue Component (UI)
  --> useAuth() composable (business logic, validation, loading state)
    --> authApi service (raw HTTP calls via $customFetch)
      --> useAuthStore() (persists token/user in cookies)
```

### Supported Flows

- **Registration** -- Email + password, then OTP verification
- **Login** -- Email + password with optional "Remember Me"
- **Forgot Password** -- Sends OTP to email
- **OTP Verification** -- 6-digit code input with resend
- **Password Reset** -- Token-based password reset
- **Logout** -- Server-side token invalidation + local session clear

### Token Management

- Tokens are stored in HTTP cookies (via `useCookie`)
- The `customFetch` plugin automatically attaches the `Authorization: Bearer <token>` header to every API request
- On 401 responses, the session is cleared and the user is redirected to `/login`

---

## Internationalization

The application supports full RTL/LTR bilingual operation:

| Language | Code | Direction |
| -------- | ---- | --------- |
| English  | `en` | LTR       |
| Arabic   | `ar` | RTL       |

### Translation File Organization

Translation files are modularized by feature under `i18n/locales/{lang}/`:

```
locales/en/
  |-- app.ts          # General app strings
  |-- auth.ts         # Login, register, password forms
  |-- common.ts       # Shared labels, buttons, statuses
  |-- dashboard.ts    # All dashboard-related translations
  |-- error.ts        # Error messages
  |-- landing.ts      # Landing page content
  |-- navigation.ts   # Sidebar and nav labels
  `-- validation.ts   # Form validation messages
```

### Language Detection

- Language preference is stored in a cookie (`i18n_locale`)
- Browser language is auto-detected on first visit
- Users can switch language at runtime via `AppLanguageSwitcher`
- The `Accept-Language` and `lang` headers are sent with every API request

---

## State Management

Pinia stores are located in `app/stores/` and are auto-imported:

| Store    | Responsibility                                                        |
| -------- | --------------------------------------------------------------------- |
| `auth`   | Authentication state (token, user profile, session persistence)       |

### Composables

| Composable         | Purpose                                                            |
| ------------------ | ------------------------------------------------------------------ |
| `useAuth`          | Orchestrates auth flows (register, login, OTP, logout)             |
| `useAppFetch`      | Route-aware async data fetching with cache key generation          |
| `usePagination`    | Manages pagination state (page, limit, total)                      |
| `useSidebar`       | Controls dashboard sidebar open/close state                        |
| `useTheme`         | Toggles dark/light mode                                            |
| `useUserSession`   | Provides current user session data                                 |

---

## API Integration Layer

### customFetch Plugin

The `$customFetch` plugin (`app/plugins/customFetch.ts`) wraps Nuxt's `$fetch` with:

- **Base URL**: All requests route through `/api` (proxied by Nitro)
- **Auth Headers**: Automatically injects the Bearer token from cookies
- **Request Deduplication**: Aborts previous in-flight requests to the same endpoint
- **Error Handling**: Displays toast notifications on client, throws `createError` on server
- **i18n Headers**: Sends `Accept-Language` and `lang` with every request

### Service Layer

Services under `app/services/` provide typed API method wrappers:

```typescript
// Example usage in a composable
const response = await authApi.login({ email, password })
```

### Type Safety

All API response shapes are defined in `app/types/api/`:

- `response.ts` -- Generic `ApiResponse<T>` wrapper
- `auth.ts` -- Auth-specific response types
- `pagination.ts` -- `PaginatedResponse<T>` type

---

## Build Optimization

The production build is configured with manual chunk splitting to maximize cacheability and minimize initial load:

### Vendor Chunk Strategy

| Chunk Name           | Contents                              | Rationale                                |
| -------------------- | ------------------------------------- | ---------------------------------------- |
| `vendor-i18n`        | vue-i18n, @intlify                    | Large, rarely changes                    |
| `vendor-charts`      | chart.js, vue-chartjs                 | Only loaded on chart-containing pages    |
| `vendor-gsap`        | GSAP                                  | Only loaded on the landing page          |
| `vendor-reka-ui`     | Reka UI primitives                    | Core UI library, stable across deploys   |
| `vendor-vueuse`      | @vueuse composables                   | Utility layer, infrequent updates        |
| `vendor-floating-ui` | @floating-ui                          | Positioning engine for dropdowns/poppers |
| `vendor-tv`          | tailwind-variants                     | Styling engine for @nuxt/ui             |
| `vendor-tanstack`    | @tanstack                             | Table/virtual utilities                  |
| `vendor-pinia`       | Pinia + @pinia/nuxt                   | State management, very stable            |
| `vendor-zod`         | Zod                                   | Validation, stable                       |
| `vendor-aos`         | AOS                                   | Scroll animation lib                     |
| `vendor-icons`       | @iconify                              | Icon collections                         |

### Additional Optimizations

- **CSS Code Splitting**: Each async route gets its own CSS file
- **Source Maps**: Disabled in production for faster builds and smaller output
- **Nitro Minification**: Server-side output is minified
- **Font Self-Hosting**: `@nuxt/fonts` downloads and self-hosts Google Fonts at build time, eliminating render-blocking external requests
- **Icon Local Bundling**: All icon collections are bundled locally (no runtime API calls to Iconify)
- **Tree Shaking**: Client-only components are tree-shaken from the server bundle
- **i18n Bundle**: Runtime-only mode with message compiler dropped from production

---

## Deployment

### Production Build

```bash
pnpm build
```

This generates a `.output/` directory with the production-ready Node.js server.

### Running in Production

```bash
# Direct
node .output/server/index.mjs

# With PM2 (recommended)
pm2 start ecosystem.config.cjs
```

The PM2 config (`ecosystem.config.cjs`) runs the server in cluster mode on the port specified by `NUXT_PORT` (default: 3000).

### Deployment Checklist

1. Set `NUXT_PUBLIC_API_BASE_URL` to the production backend URL
2. Set `NUXT_PUBLIC_COOKIE_SECURE=true` for HTTPS environments
3. Run `pnpm build`
4. Copy `.output/` to the server
5. Start with `node .output/server/index.mjs` or PM2

---

## Coding Conventions

### General

- **TypeScript** is required for all `.ts` and `.vue` files
- **Composition API** with `<script setup>` syntax only -- no Options API
- **Auto-imports** are enabled for Vue, Nuxt, and Pinia APIs -- no manual imports required for `ref`, `computed`, `useRoute`, etc.
- **Component naming** follows the pattern `{Feature}{Descriptor}.vue` (e.g., `SessionList.vue`, `HelpContactForm.vue`)

### ESLint

The project uses `@nuxt/eslint` with the following stylistic rules:

- No trailing commas (`commaDangle: 'never'`)
- 1TBS brace style (`braceStyle: '1tbs'`)

Run `pnpm lint` before committing. CI will reject code that does not pass linting.

### Component Organization

Components are auto-imported without path prefixes. Organize by feature domain:

```
components/
  dashboard/
    sessions/       # Session-related components
    settings/       # Settings-related components
    ...
  auth/             # Auth form components
  landing/          # Landing page section components
  ui/               # Reusable, feature-agnostic UI primitives
  common/           # Shared layout components
```

### File Naming

| Type          | Convention                     | Example                    |
| ------------- | ------------------------------ | -------------------------- |
| Pages         | `kebab-case.vue`               | `live-session.vue`         |
| Components    | `PascalCase.vue`               | `LiveSessionTimeline.vue`  |
| Composables   | `use{Name}.ts`                 | `useAuth.ts`               |
| Stores        | `{name}.ts`                    | `auth.ts`                  |
| Services      | `{name}.ts`                    | `auth.ts`                  |
| Middleware    | `{name}.ts`                    | `auth.ts`                  |

---

## License

This project is proprietary software. All rights reserved by Haze Clue.
