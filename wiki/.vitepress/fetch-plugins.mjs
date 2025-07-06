import fs from 'fs/promises'
import path from 'path'
import fetch from 'node-fetch'

const pluginStoreFile = 'https://raw.githubusercontent.com/Inrixia/TidaLuna/master/plugins/ui/src/SettingsPage/PluginStoreTab/index.tsx'
const OUTPUT = path.resolve('./wiki/assets/generated-plugins.json')

async function fetchJSON(url) {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    return await res.json()
  } catch (e) {
    console.warn(`⚠️ Fehler beim Laden: ${url}`, e.message)
    return null
  }
}

function getBaseUrl(storeUrl) {
  return storeUrl.replace(/store\.json$/, '')
}

async function main() {
  console.log('🔄 Lade Plugin-Store-URLs...')
  const raw = await fetch(pluginStoreFile).then(r => r.text())
  const matches = [...raw.matchAll(/addToStores\(["'](.*?)["']\)/g)].map(m => m[1])

  const allStores = []

  for (const storeUrl of matches) {
    const base = getBaseUrl(storeUrl)
    const store = await fetchJSON(storeUrl)
    if (!store) continue

    const author = store.author || { name: 'Unknown', url: '', avatarUrl: '' }
    const homepage = store.homepage || ''
    const pluginFiles = store.plugins || []

    const plugins = []
    for (const pluginFile of pluginFiles) {
        const safeFileName = pluginFile
          .replace(/\.mjs$/, '.json')
          .replace(/ /g, '.')
        const jsonUrl = `${base}${encodeURIComponent(safeFileName)}`
        const pluginData = await fetchJSON(jsonUrl)
        if (pluginData) plugins.push(pluginData)
    }

    allStores.push({ author, homepage, plugins })
  }

  await fs.mkdir(path.dirname(OUTPUT), { recursive: true })
  await fs.writeFile(OUTPUT, JSON.stringify(allStores, null, 2))
  console.log(`✅ ${allStores.length} Plugin-Stores gespeichert unter: ${OUTPUT}`)
}

main()
