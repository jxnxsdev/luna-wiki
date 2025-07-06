<script setup>
import { ref, onMounted } from 'vue'

const contributors = ref([])
const repos = [
  {
    label: 'TidaLuna',
    url: 'https://github.com/Inrixia/TidaLuna',
    api: 'https://api.github.com/repos/Inrixia/TidaLuna/contributors'
  },
  {
    label: 'Installer',
    url: 'https://github.com/jxnxsdev/TidaLuna-Installer',
    api: 'https://api.github.com/repos/jxnxsdev/TidaLuna-Installer/contributors'
  },
  {
    label: 'Wiki',
    url: 'https://github.com/jxnxsdev/luna-wiki',
    api: 'https://api.github.com/repos/jxnxsdev/luna-wiki/contributors'
  }
]

onMounted(async () => {
  const results = await Promise.all(
    repos.map(async ({ label, api, url }) => {
      const res = await fetch(api)
      const users = await res.json()
      return {
        label,
        url,
        users: Array.isArray(users) ? users : []
      }
    })
  )
  contributors.value = results
})
</script>

<template>
  <section class="contributors-section">
    <h2 class="section-title">Contributors</h2>
    <div class="repo-cards">
      <div class="repo-card" v-for="repo in contributors" :key="repo.label">
        <h3 class="repo-title">
          <a :href="repo.url" target="_blank" rel="noopener">
            {{ repo.label }} Contributors
          </a>
        </h3>
        <div class="avatar-grid">
          <a
            v-for="user in repo.users"
            :key="user.login"
            :href="user.html_url"
            class="avatar-link"
            target="_blank"
            rel="noopener"
          >
            <img
              :src="user.avatar_url"
              :alt="user.login"
              class="avatar"
              loading="lazy"
            />
            <span class="username">{{ user.login }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contributors-section {
  margin-top: 2rem;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.repo-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.repo-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1rem;
  flex: 1 1 280px;
  min-width: 260px;
}

.repo-title {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.repo-title a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.avatar-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.avatar-link {
  display: flex;
  align-items: center;
  background-color: var(--vp-c-bg-alt);
  border-radius: 6px;
  padding: 0.3rem 0.5rem;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: background 0.2s;
}

.avatar-link:hover {
  background-color: var(--vp-c-bg);
}

.avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 0.4rem;
}

.username {
  font-size: 0.9rem;
}
</style>
