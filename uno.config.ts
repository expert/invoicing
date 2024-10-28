import { mergeConfigs } from '@unocss/core'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  shortcuts: [
    // Define a reusable style for form fields
    // ['bg-primary', '#116acc'],
    // ['border-primary', '#116acc'],
    // ['hover:bg-primary', '#116acc'],
    ['form-control', 'px-2 py-1 border border-gray-300 rounded-md outline-none focus:border-blue-500'],
    ['btn-primary', 'bg-primary-blue text-white border-primary-blue hover:bg-primary-blue mb-2 mr-2 rounded border px-4 py-2 text-xs font-medium transition']
  ],
  theme: {
    // ...
    colors: {
      primary: {
        blue: '#116acc', //class="bg-brand-primary"
        DEFAULT: '#942192' //class="bg-brand"
      },
    },
  }
}])