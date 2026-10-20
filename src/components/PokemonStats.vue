<script setup lang="ts">
import type { PokemonStat } from '../types/pokemon'

defineProps<{
  stats: PokemonStat[]
}>()

const STAT_LABELS: Record<string, string> = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defesa',
  'special-attack': 'Atq. Esp.',
  'special-defense': 'Def. Esp.',
  speed: 'Velocidade',
}

// Maior valor base possível de um status (Blissey, HP 255)
const MAX_STAT = 255
</script>

<template>
  <section class="panel">
    <h2>Status base</h2>
    <ul>
      <li v-for="item in stats" :key="item.stat.name">
        <span class="label">{{ STAT_LABELS[item.stat.name] ?? item.stat.name }}</span>
        <span class="value">{{ item.base_stat }}</span>
        <span class="bar">
          <span class="fill" :style="{ width: `${(item.base_stat / MAX_STAT) * 100}%` }"></span>
        </span>
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
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
}

li {
  display: grid;
  grid-template-columns: 90px 36px 1fr;
  align-items: center;
  gap: 8px;
}

.label {
  color: var(--text-muted);
}

.value {
  font-weight: 600;
  text-align: right;
}

.bar {
  height: 8px;
  border-radius: 999px;
  background: var(--border);
  overflow: hidden;
}

.fill {
  display: block;
  height: 100%;
  background: var(--primary);
}
</style>
