// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,

    devServer: {
        port: 3000
    },

    devtools: {enabled: true},
    compatibilityDate: '2024-09-26',

    runtimeConfig: {
        public: {}
    },

    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        layoutTransition: {name: 'layout', mode: 'out-in'},
        // Global page headers
        head: {
            title: 'Starter',
            titleTemplate: '%s | Nuxt Template Starter',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover'},
                {
                    name: 'title',
                    key: 'title',
                    content: 'Nuxt Template Starter'
                },
                {
                    name: 'description',
                    key: 'description',
                    content: 'Nuxt 3 app starter template for development.'
                },
                {
                    name: 'theme-color',
                    key: 'theme-color',
                    content: '#ffffff',
                    media: '(prefers-color-scheme: light)'
                },
                {
                    name: 'theme-color',
                    key: 'theme-color',
                    content: '#121212',
                    media: '(prefers-color-scheme: dark)'
                }
            ],
            htmlAttrs: {
                lang: 'en'
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ]
        }
    },

    css: [
        '~/assets/scss/main.scss'
    ],

    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@vite-pwa/nuxt',
        '@vueuse/nuxt'
    ],

    // Color mode
    colorMode: {
        preference: 'system'
    },

    // Google Fonts
    googleFonts: {
        families: {
            'DM+Sans': '200..800',
            'Plus+Jakarta+Sans': '200..800'
        },
        display: 'swap',
        prefetch: true,
        preconnect: true,
        download: true,
        outputDir: 'assets',
        stylePath: 'scss/base/_fonts.scss',
        fontsPath: 'assets/fonts'
    },

    // PWA
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: 'Nuxt Template Starter',
            short_name: 'Nuxt Starter',
            description: 'Nuxt 3 app starter template for development.',
            display: 'standalone',
            start_url: '/?standalone=true',
            background_color: '#f5f4fe',
            theme_color: '#121212',
            lang: 'en',
            screenshots: [
                {
                    src: '/screenshots/app-light-412x915.webp',
                    sizes: '412x915',
                    type: 'image/webp',
                    form_factor: 'narrow',
                    label: 'App Narrow Light Mode'
                },
                {
                    src: '/screenshots/app-dark-412x915.webp',
                    sizes: '412x915',
                    type: 'image/webp',
                    form_factor: 'narrow',
                    label: 'App Narrow Dark Mode'
                },
                {
                    src: '/screenshots/app-light-1440x1056.webp',
                    sizes: '1440x1056',
                    type: 'image/webp',
                    form_factor: 'wide',
                    label: 'App Wide Light Mode'
                },
                {
                    src: '/screenshots/app-dark-1440x1056.webp',
                    sizes: '1440x1056',
                    type: 'image/webp',
                    form_factor: 'wide',
                    label: 'App Wide Dark Mode'
                }
            ],
            shortcuts: [
                {
                    name: 'About',
                    description: 'Shortcuts to about page',
                    short_name: 'About',
                    url: '/about'
                }
            ]
        },
        pwaAssets: {
            config: true
        },
        workbox: {
            maximumFileSizeToCacheInBytes: 4500000,
            navigateFallback: '/',
            cleanupOutdatedCaches: true,
            globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}'],
            runtimeCaching: [
                {
                    urlPattern: 'https://fonts.googleapis.com/*',
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'google-fonts-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                            purgeOnQuotaError: true
                        },
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                },
                {
                    urlPattern: 'https://fonts.gstatic.com/*',
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'gstatic-fonts-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                            purgeOnQuotaError: true
                        },
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                },
                {
                    urlPattern: 'https://identitytoolkit.googleapis.com/*',
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'google-toolkit-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                            purgeOnQuotaError: true
                        },
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        },
        client: {
            installPrompt: true,
            periodicSyncForUpdates: 3600
        },
        devOptions: {
            enabled: true,
            suppressWarnings: true,
            navigateFallbackAllowlist: [/^\/$/],
            type: 'module'
        }
    }
})
