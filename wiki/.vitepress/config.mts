import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TidaLuna Wiki",
  description: "Wiki for the TidaLuna Tidal Mod",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Plugins', link: '/plugins' },
      { text: 'Developing Plugins', link: '/development/geting-started' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started',
        items: [
          { text: 'Luna Settings and Features', link: '/settings' },
          { text: 'Installing Plugins', link: '/install-plugins' },
          { text: 'Plugin Settings', link: '/plugin-settings' },
          { text: 'Available Plugins', link: '/plugins' },
        ]
      },
      {
        text: 'Installation',
        link: '/install/installing',
        items: [
          { text: 'Installing on Windows', link: '/install/windows' },
          { text: 'Installing on Linux', link: '/install/linux' },
          { text: 'Installing on MacOS', link: '/install/mac' }
        ]
      },
      {
        text: 'Development',
        link: '/development/getting-started',
        items: [
          { text: 'Getting Started', link: '/development/getting-started' },
          { text: 'Developer Resources', link: '/development/resources' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jxnxsdev/luna-wiki' },
      { icon: 'discord', link: 'https://discord.gg/jK3uHrJGx4' }
    ],

    search: {
      provider: 'local'
    }
  },

  sitemap: {
    hostname: 'https://luna-wiki.jxnxsdev.me',
  }
})
