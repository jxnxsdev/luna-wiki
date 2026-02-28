import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Contributors from './components/Contributors.vue'
import PluginStores from './components/PluginStores.vue'
import './style.css'

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Contributors', Contributors)
    app.component('PluginStores', PluginStores)
  }
}