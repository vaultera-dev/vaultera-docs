import { defineConfig } from 'vitepress'
import { SITE_CONFIG } from './config/site-config'

export default defineConfig({
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  base: SITE_CONFIG.basePath,
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: SITE_CONFIG.docsUrl
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${SITE_CONFIG.basePath}logo.svg` }],
    ['meta', { name: 'theme-color', content: SITE_CONFIG.theme.primaryColor }]
  ],
  themeConfig: {
    logo: SITE_CONFIG.theme.logo,
    siteTitle: SITE_CONFIG.title,
    nav: [
      { text: 'Get Started', link: '/get-started/' },
      { text: 'Protocol', link: '/protocol/' },
      { text: 'Vaults', link: '/vaults/' },
      { text: 'Settlement', link: '/settlement/' },
      { text: 'Security', link: '/security/' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Get Started', link: '/get-started/' },
          { text: 'Protocol Overview', link: '/protocol/' }
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Vault Lifecycle', link: '/vaults/' },
          { text: 'Pricing and Settlement', link: '/settlement/' },
          { text: 'Security', link: '/security/' }
        ]
      },
      {
        text: 'Products',
        items: [
          { text: 'Admin and Investor Portals', link: '/portals/' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: 'Contributing', link: '/contributing/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: SITE_CONFIG.githubUrl }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    lastUpdated: {
      text: 'Last updated'
    },
    editLink: {
      pattern: `${SITE_CONFIG.githubUrl}/edit/main/docs/:path`,
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Official Vaultera protocol documentation',
      copyright: `Copyright © ${new Date().getFullYear()} Vaultera`
    }
  },
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
