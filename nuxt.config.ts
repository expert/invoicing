// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NODE_ENV === 'production' ? 'https://api.prod.com' : '/api'
    }
  },
  modules: [
    '@nuxt/test-utils/module',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'nuxt-echarts',
  ],
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        /* redis connector options */
      },
      db: {
        driver: 'fs',
        base: './.data/db'
      }
    }
  },
  unocss: {
    nuxtLayers: true,
  },
  echarts: {
    charts: ['BarChart', 'LineChart', 'PieChart'],
    components: ['DatasetComponent', 'GridComponent', 'TooltipComponent', 'ToolboxComponent', 'LegendComponent'],
  }
})