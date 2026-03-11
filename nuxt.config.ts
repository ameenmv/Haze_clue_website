// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@pinia/nuxt', '@nuxt/image', '@nuxtjs/i18n', '@nuxt/fonts', 'nuxt-aos'],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  imports: {
    dirs: ['~/types']
  },

  devtools: {
    enabled: true
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Haze Clue - Unleash Your Mind\'s Potential' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    // pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: [
        'white',
        'black',
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error'
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
      appName: process.env.NUXT_PUBLIC_APP_NAME,
      cookieSecure: false
    }
  },

  compatibilityDate: '2025-10-23',

  // ── Build & Vite Optimizations ──────────────────────────────────
  vite: {
    build: {
      // CSS code splitting - each async chunk gets its own CSS
      cssCodeSplit: true,
      // Suppress chunk size warnings (we handle splitting manually)
      chunkSizeWarningLimit: 350,
      // Disable sourcemaps in production (fixes Tailwind warnings + faster build)
      sourcemap: false,
      rollupOptions: {
        output: {
          // Manual chunks to split large vendor libraries into separate cacheable bundles
          manualChunks(id: string) {
            // Vue I18n + Intlify runtime - large, rarely changes
            if (id.includes('vue-i18n') || id.includes('@intlify')) {
              return 'vendor-i18n'
            }
            // Chart.js + vue-chartjs - only used on specific pages
            if (id.includes('chart.js') || id.includes('vue-chartjs')) {
              return 'vendor-charts'
            }
            // GSAP - animation library, only used on landing page
            if (id.includes('gsap')) {
              return 'vendor-gsap'
            }
            // Reka UI - headless UI primitives (large)
            if (id.includes('reka-ui')) {
              return 'vendor-reka-ui'
            }
            // VueUse - composable utilities
            if (id.includes('@vueuse')) {
              return 'vendor-vueuse'
            }
            // Floating UI - positioning engine used by reka-ui
            if (id.includes('@floating-ui')) {
              return 'vendor-floating-ui'
            }
            // Tailwind Variants - styling engine for @nuxt/ui
            if (id.includes('tailwind-variants')) {
              return 'vendor-tv'
            }
            // TanStack - table/virtual utilities
            if (id.includes('@tanstack')) {
              return 'vendor-tanstack'
            }
            // Pinia - state management
            if (id.includes('pinia') || id.includes('@pinia')) {
              return 'vendor-pinia'
            }
            // Zod - validation library
            if (id.includes('/zod/')) {
              return 'vendor-zod'
            }
            // AOS - scroll animations
            if (id.includes('aos') && id.includes('node_modules')) {
              return 'vendor-aos'
            }
            // Iconify / Icon collections - bundle separately
            if (id.includes('@iconify')) {
              return 'vendor-icons'
            }
          }
        }
      }
    }
  },

  // ── Experimental Performance Features ───────────────────────────
  experimental: {
    // Tree-shake client-only components on server
    treeshakeClientOnly: true
  },

  // ── Nitro Server Optimization ──────────────────────────────────
  nitro: {
    minify: true
  },

  // ── Font Optimization ─────────────────────────────────────────
  fonts: {
    families: [
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [200, 300, 400, 500, 600, 700, 800] },
      { name: 'Tajawal', provider: 'google', weights: [200, 300, 400, 500, 700, 800, 900] },
      { name: 'Poppins', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [300, 400, 500, 600, 700] }
    ],
    defaults: {
      preload: true
    }
  },

  icon: {
    serverBundle: 'local',
    clientBundle: {
      scan: true
    },
    provider: 'server',
    fallbackToApi: false
  },

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: -20, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'ar',
        dir: 'rtl',
        file: 'ar.ts',
        language: 'ar-SA',
        name: 'العربية'
      },
      {
        code: 'en',
        dir: 'ltr',
        file: 'en.ts',
        language: 'en-US',
        name: 'English'
      }
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      alwaysRedirect: true,
      redirectOn: 'root',
      cookieSecure: import.meta.env.PROD
    },
    bundle: {
      fullInstall: false,
      dropMessageCompiler: true,
      runtimeOnly: true
    },
    vueI18n: './i18n.config.ts'
  },

  pinia: {
    storesDirs: ['app/stores', 'app/stores/**']
  },

  routeRules: {
    '/api/**': {
      proxy: `${process.env.NUXT_PUBLIC_API_BASE_URL || 'http://eegattentionsystem.runasp.net/api'}/**`
    }
  }
})
