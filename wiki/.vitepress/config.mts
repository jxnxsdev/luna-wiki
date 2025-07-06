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
        text: 'Getting Started',
        link: '/getting-started',
        items: [
          { text: 'Luna Settings and Features', link: '/settings' },
          { text: 'Installing Plugins', link: '/install-plugins' },
          { text: 'Plugin Settings', link: '/plugin-settings' }
        ]
      },
      {
        text: 'Installation',
        items: [
          { text: 'Installing on Windows', link: '/install/windows' },
          { text: 'Installing on Linux', link: '/install/linux' },
          { text: 'Installing on MacOS', link: '/install/mac' }
        ]
      },
      {
        text: 'Development',
        items: [
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
