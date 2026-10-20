<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { isAxiosError } from 'axios'
import PokemonHeader from '../components/PokemonHeader.vue'
import PokemonInfo from '../components/PokemonInfo.vue'
import PokemonStats from '../components/PokemonStats.vue'
import PokemonAbilities from '../components/PokemonAbilities.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import { getPokemon } from '../services/pokeapi'
import { getArtworkUrl } from '../utils/pokemon'
import type { Pokemon } from '../types/pokemon'

// Recebido da rota /pokemon/:name (props: true no router)
const props = defineProps<{
  name: string
}>()

const pokemon = ref<Pokemon | null>(null)
const loading = ref(false)
const error = ref('')

const image = computed(() => {
  if (!pokemon.value) return ''
  const { sprites, id } = pokemon.value
  return sprites.other?.['official-artwork']?.front_default ?? sprites.front_default ?? getArtworkUrl(id)
})

const types = computed(() => pokemon.value?.types.map((item) => item.type.name) ?? [])

async function loadPokemon(name: string) {
  loading.value = true
  error.value = ''
  pokemon.value = null
  try {
    pokemon.value = await getPokemon(name)
  } catch (err) {
    error.value =
      isAxiosError(err) && err.response?.status === 404
        ? `Pokémon "${name}" não encontrado.`
        : 'Não foi possível carregar o Pokémon. Tente novamente.'
  } finally {
    loading.value = false
  }
}

watch(() => props.name, loadPokemon, { immediate: true })
</script>

<template>
  <button type="button" class="back" @click="$router.back()">‹ Voltar</button>
  <LoadingSpinner v-if="loading" />
  <ErrorMessage v-else-if="error" :message="error" />
  <div v-else-if="pokemon" class="details">
    <PokemonHeader :id="pokemon.id" :name="pokemon.name" :image="image" :types="types" />
    <div class="panels">
      <PokemonInfo
        :height="pokemon.height"
        :weight="pokemon.weight"
        :base-experience="pokemon.base_experience"
      />
      <PokemonAbilities :abilities="pokemon.abilities" />
      <PokemonStats :stats="pokemon.stats" class="stats" />
    </div>
  </div>
</template>

<style scoped>
.back {
  margin-bottom: 16px;
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
}

.back:hover {
  border-color: var(--primary);
}

.details {
  display: grid;
  gap: 16px;
}

.panels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.stats {
  grid-column: 1 / -1;
}
</style>
