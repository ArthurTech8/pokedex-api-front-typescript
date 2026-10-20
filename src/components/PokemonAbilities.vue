<script setup lang="ts">
import type { PokemonAbility } from '../types/pokemon'
import { formatName } from '../utils/pokemon'

defineProps<{
  abilities: PokemonAbility[]
}>()
</script>

<template>
  <section class="panel">
    <h2>Habilidades</h2>
    <ul>
      <li v-for="item in abilities" :key="item.ability.name">
        {{ formatName(item.ability.name) }}
        <small v-if="item.is_hidden">(oculta)</small>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.panel {
  padding: 20px;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

h2 {
  margin: 0 0 12px;
  font-size: 1.2rem;
}

ul {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 4px;
}

small {
  color: var(--text-muted);
}
</style>
