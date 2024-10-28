import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno' // This provides the default utilities

import config from './.nuxt/uno.config.mjs'

export default {
  ...config, // Spread in the base config if needed

  presets: [
    presetUno(),
    presetIcons({
      // Configure your icons preset here if needed
      // e.g., scale: 1.2, collections: { custom: {} }
    }),
    // Add other UnoCSS presets here as needed
  ],

  shortcuts: {
    'btn': 'px-4 py-2 rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-150',
    'btn-icon': 'flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer',
    'form-select': 'border rounded p-2 w-full',
    'form-input': 'border rounded p-2 w-full',
    'text-lg': 'text-base md:text-lg',
    'text-xl': 'text-lg md:text-xl',
    'p-4': 'p-4 md:p-6',
    'btn-primary': 'bg-primary-blue text-white border-primary-blue hover:bg-primary-blue mb-2 mr-2 rounded border px-4 py-2 text-xs font-medium transition',
    'form-control': 'px-2 py-1 border border-gray-300 rounded-md outline-none focus:border-blue-500'
  },

  theme: {
    colors: {
      primary: {
        blue: '#116acc',
        DEFAULT: '#942192'
      },
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  }
}
