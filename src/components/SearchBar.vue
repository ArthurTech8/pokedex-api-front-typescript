<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  { placeholder: 'Buscar por nome ou número' },
)

const emit = defineEmits<{
  search: [query: string]
}>()

const query = ref('')

function submit() {
  const value = query.value.trim()
  if (value) emit('search', value)
}
</script>

<template>
  <form class="search-bar" @submit.prevent="submit">
    <input v-model="query" type="search" :placeholder="placeholder" aria-label="Buscar Pokémon" />
    <button type="submit">Buscar</button>
  </form>
</template>

<style scoped>
.search-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

input {
  flex: 1;
  min-width: 0;
  padding: 10px 14px;
  font: inherit;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
}

input:focus {
  outline: 2px solid var(--primary);
  outline-offset: 1px;
}

button {
  padding: 10px 18px;
  border: none;
  border-radius: var(--radius);
  background: var(--primary);
  color: #fff;
  font-weight: 600;
}

button:hover {
  background: var(--primary-dark);
}
</style>
