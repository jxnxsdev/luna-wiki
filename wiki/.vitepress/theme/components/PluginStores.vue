<script setup>
import { ref, onMounted } from 'vue'

const stores = ref([])

onMounted(async () => {
  const res = await fetch('/assets/generated-plugins.json')
  stores.value = await res.json()
})
</script>

<template>
  <section class="plugin-stores">
    <h2 class="title">Plugin Stores</h2>
    <div class="store-grid">
      <div class="store-card" v-for="store in stores" :key="store.author.name">
        <div class="store-header">
          <a :href="store.homepage" target="_blank" rel="noopener" class="author-link">
            <img
              v-if="store.author.avatarUrl"
              :src="store.author.avatarUrl"
              class="avatar"
              :alt="store.author.name"
            />
            <span class="author-name">{{ store.author.name }}</span>
          </a>
        </div>
        <ul class="plugin-list">
          <li v-for="plugin in store.plugins" :key="plugin.name">
            <strong>{{ plugin.name }}</strong>
            <div class="desc">{{ plugin.description }}</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.plugin-stores {
  margin-top: 2rem;
}
.title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.store-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.store-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1rem;
}
.store-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.author-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--vp-c-text-1);
}
.author-link:hover {
  text-decoration: underline;
}
.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}
.author-name {
  font-weight: 600;
  font-size: 1rem;
}
.plugin-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
}
.plugin-list li {
  margin-bottom: 0.5rem;
}
.desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>
