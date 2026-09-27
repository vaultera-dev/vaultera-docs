import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { SITE_CONFIG } from './config/site-config'

export default withMermaid(defineConfig({
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
      {
        text: 'Protocol',
        items: [
          { text: 'Architecture', link: '/protocol/' },
          { text: 'Vault Lifecycle', link: '/vaults/' },
          { text: 'Settlement', link: '/settlement/' },
          { text: 'Fees', link: '/fees/' },
          { text: 'Policies', link: '/protocol/policies' },
          { text: 'Security', link: '/security/' }
        ]
      },
      {
        text: 'Ecosystem',
        items: [
          { text: 'Supported Networks', link: '/networks/' },
          { text: 'Sepolia Tokens', link: '/networks/supported-tokens' },
          { text: 'Sepolia Adapters', link: '/networks/supported-adapters' },
          { text: 'Sepolia Contracts', link: '/networks/sepolia-contracts' }
        ]
      },
      {
        text: 'Portals',
        items: [
          { text: 'Overview', link: '/portals/' },
          { text: 'Admin Portal', link: '/portals/admin' },
          { text: 'Investor Portal', link: '/portals/investor' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Get Started', link: '/get-started/' }
        ]
      },
      {
        text: 'Protocol',
        items: [
          { text: 'Architecture', link: '/protocol/' },
          { text: 'Access and Pausing', link: '/protocol/access-control' },
          { text: 'Vault Lifecycle', link: '/vaults/' },
          { text: 'Pricing and Settlement', link: '/settlement/' },
          { text: 'Fees', link: '/fees/' },
          { text: 'Policies and Compliance', link: '/protocol/policies' },
          { text: 'Execution and Rebalancing', link: '/protocol/execution' },
          { text: 'Upgradeability', link: '/protocol/upgradeability' },
          { text: 'Security', link: '/security/' }
        ]
      },
      {
        text: 'Ecosystem and Deployments',
        items: [
          { text: 'Supported Networks', link: '/networks/' },
          {
            text: 'Supported Tokens',
            collapsed: false,
            items: [
              { text: 'Sepolia', link: '/networks/supported-tokens' }
            ]
          },
          {
            text: 'Supported Adapters',
            collapsed: false,
            items: [
              { text: 'Sepolia', link: '/networks/supported-adapters' }
            ]
          },
          {
            text: 'Contract Addresses',
            collapsed: false,
            items: [
              { text: 'Sepolia', link: '/networks/sepolia-contracts' }
            ]
          }
        ]
      },
      {
        text: 'Portals',
        items: [
          { text: 'Overview', link: '/portals/' },
          { text: 'Admin Portal', link: '/portals/admin' },
          { text: 'Investor Portal', link: '/portals/investor' }
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
  },
  mermaid: {
    theme: 'base',
    themeVariables: {
      primaryColor: '#49dcb8',
      primaryTextColor: '#17194f',
      primaryBorderColor: '#17977f',
      lineColor: '#4f5074',
      secondaryColor: '#f3f0f2',
      tertiaryColor: '#faf8f9'
    }
  }
}))
