<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type: string
}>()

const TYPE_COLORS: Record<string, string> = {
  normal: '#a8a77a',
  fire: '#ee8130',
  water: '#6390f0',
  electric: '#d4a900',
  grass: '#5fa83a',
  ice: '#5bbdb8',
  fighting: '#c22e28',
  poison: '#a33ea1',
  ground: '#c2a04a',
  flying: '#8f7ae6',
  psychic: '#f95587',
  bug: '#8fa01a',
  rock: '#b6a136',
  ghost: '#735797',
  dragon: '#6f35fc',
  dark: '#705746',
  steel: '#8a8aa8',
  fairy: '#d685ad',
}

const color = computed(() => TYPE_COLORS[props.type] ?? '#777')
</script>

<template>
  <span class="type-badge" :style="{ backgroundColor: color }">{{ type }}</span>
</template>

<style scoped>
.type-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
}
</style>
