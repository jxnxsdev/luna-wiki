import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TidaLuna Wiki",
  description: "Wiki for the TidaLuna Tidal Mod",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jxnxsdev/luna-wiki' },
      { icon: 'discord', link: 'discord.gg/jK3uHrJGx4' }
    ]
  },

  sitemap: {
    hostname: 'https://luna-wiki.jxnxsdev.me',
  }
})
