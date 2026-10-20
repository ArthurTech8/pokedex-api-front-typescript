<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SearchBar from '../components/SearchBar.vue'
import PokemonList from '../components/PokemonList.vue'
import PaginationControls from '../components/PaginationControls.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import { getPokemonList } from '../services/pokeapi'
import { getArtworkUrl, getIdFromUrl } from '../utils/pokemon'
import type { PokemonSummary } from '../types/pokemon'

const PAGE_SIZE = 20

const route = useRoute()
const router = useRouter()

const pokemons = ref<PokemonSummary[]>([])
const total = ref(0)
const loading = ref(false)
const error = ref('')

// A página fica na query (?page=2) para o "voltar" do navegador manter a posição
const page = computed(() => Math.max(1, Number(route.query.page) || 1))
const totalPages = computed(() => Math.max(1, Math.ceil(total.value / PAGE_SIZE)))

async function loadPage(current: number) {
  loading.value = true
  error.value = ''
  try {
    const data = await getPokemonList(PAGE_SIZE, (current - 1) * PAGE_SIZE)
    total.value = data.count
    pokemons.value = data.results.map((item) => {
      const id = getIdFromUrl(item.url)
      return { id, name: item.name, image: getArtworkUrl(id) }
    })
  } catch {
    error.value = 'Não foi possível carregar os Pokémon. Tente novamente.'
  } finally {
    loading.value = false
  }
}

function changePage(newPage: number) {
  router.push({ name: 'home', query: { page: newPage } })
}

function search(query: string) {
  router.push({ name: 'pokemon', params: { name: query.toLowerCase() } })
}

watch(page, loadPage, { immediate: true })
</script>

<template>
  <SearchBar @search="search" />
  <LoadingSpinner v-if="loading" />
  <ErrorMessage v-else-if="error" :message="error" />
  <template v-else>
    <PokemonList :pokemons="pokemons" />
    <PaginationControls :page="page" :total-pages="totalPages" @change="changePage" />
  </template>
</template>
