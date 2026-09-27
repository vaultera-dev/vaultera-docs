const isGitHubPages = process.env.DEPLOY_TARGET === 'github'

export const SITE_CONFIG = {
  title: 'Vaultera',
  description: 'Official documentation for the Vaultera on-chain fund infrastructure protocol',
  basePath: isGitHubPages ? '/vaultera-docs/' : '/',
  docsUrl: isGitHubPages
    ? 'https://vaultera-dev.github.io/vaultera-docs/'
    : 'https://vaultera-docs.vercel.app/',
  githubUrl: 'https://github.com/vaultera-dev/vaultera-docs',
  theme: {
    primaryColor: '#49dcb8',
    logo: '/logo.svg'
  }
} as const
