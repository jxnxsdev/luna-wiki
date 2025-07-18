import DefaultTheme from 'vitepress/theme'
import Contributors from './components/Contributors.vue'
import PluginStores from './components/PluginStores.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Contributors', Contributors)
    app.component('PluginStores', PluginStores)
  }
}