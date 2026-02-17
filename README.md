# 🚀 Nuxt 4 Template

[![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Nuxt UI](https://img.shields.io/badge/Nuxt_UI-4.x-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://ui.nuxt.com)

> A scalable, production-ready base template for Nuxt 4 projects, pre-configured with essential modules and best practices.

---

## 📑 Table of Contents

- [📂 Project Structure](#-project-structure)
- [🧩 Component Organization](#-component-organization)
- [🎨 Reusable UI Components](#-reusable-ui-components) 
- [✨ Key Features](#-key-features)
- [🛠 Setup](#-setup)
- [🌍 Environment Variables](#-environment-variables)
- [📦 Packages Used](#-packages-used)

---

## 📂 Project Structure 

The project follows a modular structure within the `app` directory to keep the root clean.

```
neop-nuxt-template/
├── 📂 app/
│   ├── 📂 assets/          # 🎨 CSS, images, fonts
│   ├── 📂 components/      # 🧩 Vue components
│   │   ├── 📂 common/      # Shared components (Header, Footer)
│   │   ├── 📂 ui/          # Reusable UI components (Buttons, Inputs)
│   │   └── 📂 home/        # Page-specific components
│   ├── 📂 composables/     # 🎣 Auto-imported composables
│   ├── 📂 layouts/         # 📐 Layouts
│   ├── 📂 pages/           # 📄 Application routes
│   ├── 📂 plugins/         # 🔌 Nuxt plugins
│   ├── 📂 schema/          # 🛡️ Zod schemas
│   ├── 📂 stores/          # 🍍 Pinia stores
│   ├── 📂 types/           # 🏷️ TypeScript interfaces
│   └── 📂 utils/           # 🛠️ Helper functions
├── 📂 i18n/                # 🌐 Internationalization
│   ├── 📂 locales/         # Locale files (en, ar)
│   └── 📄 i18n.config.ts   # i18n configuration
├── 📂 public/              # 📦 Static files
├── 📄 nuxt.config.ts       # ⚙️ Nuxt configuration
└── 📄 package.json         # 📦 Dependencies
```

---

## 🧩 Component Organization

Components are organized by their scope:

| Directory     | Description                          | Example                        |
| :------------ | :----------------------------------- | :----------------------------- |
| **`common/`** | Domain-specific shared components    | `AppHeader`, `AppFooter`       |
| **`ui/`**     | Domain-agnostic reusable UI elements | `AppImage`, `AppButton`        |
| **`[page]/`** | Page-specific components             | `app/components/home/Hero.vue` |

---

## 🎨 Reusable UI Components

### 🖼️ AppImage

A wrapper around `NuxtImg` with skeleton loading support.

**Props:**

| Prop             | Type                        | Default | Description                 |
| :--------------- | :-------------------------- | :------ | :-------------------------- |
| `src`            | `string`                    | -       | Image source URL            |
| `alt`            | `string`                    | -       | Alternative text            |
| `containerClass` | `string`                    | `''`    | Classes for container div   |
| `imgClass`       | `string`                    | `''`    | Classes for image element   |
| `skeletonClass`  | `string`                    | `''`    | Classes for skeleton loader |
| `showSkeleton`   | `boolean`                   | `true`  | Show skeleton while loading |
| `lazy`           | `boolean`                   | `true`  | Enable lazy loading         |
| `fetchPriority`  | `'auto' \| 'high' \| 'low'` | `'low'` | Image fetch priority        |

**Usage:**

```vue
<AppImage
  src="/path/to/image.jpg"
  alt="Description"
  container-class="aspect-video w-full"
  :lazy="true"
/>
```

### 🌐 AppLanguageSwitcher

A button to toggle between available locales (English/Arabic).

**Usage:**

```vue
<AppLanguageSwitcher />
```

---

## ✨ Key Features

### 🎣 Composables

- **`useAppFetch`**: Wrapper around `useFetch` with auto-base URL and auth headers.
- **`useUserSession`**: Manages user authentication (login, logout, user state).
- **`usePagination`**: Provides pagination logic for lists.

### 🌐 Internationalization (i18n)

Modular locale structure:

- `auth`: Login/Register strings
- `common`: General strings
- `error`: Error messages
- `navigation`: Menu items
- `validation`: Form validation

### 🛡️ Types & Schemas

- **Global Types**: `APIResponse`, `PaginatedResponse` in `app/types/index.d.ts`.
- **Zod Schemas**: Validation schemas in `app/schema/common.ts`.

---

## 🛠 Setup

1.  **Install Dependencies**

    ```bash
    pnpm install
    ```

2.  **Run Development Server**

    ```bash
    pnpm dev
    ```

3.  **Build for Production**

    ```bash
    pnpm build
    ```

---

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
NUXT_PUBLIC_APP_NAME="Nuxt Template"
NUXT_PUBLIC_API_BASE_URL="https://api.example.com"
```

---

## 📦 Packages Used

This template is built with a powerful stack:

- **Framework**: `nuxt`
- **UI System**: `@nuxt/ui` (Tailwind CSS based)
- **Styling**: `tailwindcss`
- **State**: `@pinia/nuxt`
- **i18n**: `@nuxtjs/i18n`
- **Animations**: `gsap`, `nuxt-aos`
- **Images**: `@nuxt/image`
- **Linting**: `@nuxt/eslint`
