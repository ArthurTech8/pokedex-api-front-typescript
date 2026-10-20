<script setup lang="ts">
import PokemonCard from './PokemonCard.vue'
import type { PokemonSummary } from '../types/pokemon'

defineProps<{
  pokemons: PokemonSummary[]
}>()
</script>

<template>
  <ul class="pokemon-list">
    <li v-for="pokemon in pokemons" :key="pokemon.id">
      <PokemonCard :id="pokemon.id" :name="pokemon.name" :image="pokemon.image" />
    </li>
  </ul>
</template>

<style scoped>
.pokemon-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}
</style>
