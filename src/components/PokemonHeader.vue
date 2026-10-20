<script setup lang="ts">
import TypeBadge from './TypeBadge.vue'
import { formatId, formatName } from '../utils/pokemon'

defineProps<{
  id: number
  name: string
  image: string
  types: string[]
}>()
</script>

<template>
  <section class="pokemon-header">
    <img :src="image" :alt="name" width="240" height="240" />
    <div>
      <span class="id">{{ formatId(id) }}</span>
      <h1>{{ formatName(name) }}</h1>
      <div class="types">
        <TypeBadge v-for="type in types" :key="type" :type="type" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.pokemon-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

img {
  width: 240px;
  height: 240px;
  object-fit: contain;
}

.id {
  color: var(--text-muted);
  font-size: 1.1rem;
}

h1 {
  margin: 0 0 12px;
  font-size: 2.2rem;
}

.types {
  display: flex;
  gap: 8px;
}
</style>
