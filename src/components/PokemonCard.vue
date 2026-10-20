<script setup lang="ts">
import { formatId, formatName } from '../utils/pokemon'

defineProps<{
  id: number
  name: string
  image: string
}>()
</script>

<template>
  <RouterLink :to="{ name: 'pokemon', params: { name } }" class="pokemon-card">
    <img :src="image" :alt="name" loading="lazy" width="120" height="120" />
    <span class="id">{{ formatId(id) }}</span>
    <span class="name">{{ formatName(name) }}</span>
  </RouterLink>
</template>

<style scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: transform 0.15s, border-color 0.15s;
}

.pokemon-card:hover {
  transform: translateY(-3px);
  border-color: var(--primary);
}

img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.id {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.name {
  font-weight: 600;
}
</style>
