import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import AddressLink from './AddressLink.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AddressLink', AddressLink)
  }
} satisfies Theme
