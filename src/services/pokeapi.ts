import axios from 'axios'
import type { Pokemon, PokemonListResponse } from '../types/pokemon'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export async function getPokemonList(limit = 20, offset = 0): Promise<PokemonListResponse> {
  const { data } = await api.get<PokemonListResponse>('/pokemon', {
    params: { limit, offset },
  })
  return data
}

export async function getPokemon(nameOrId: string | number): Promise<Pokemon> {
  const key = String(nameOrId).trim().toLowerCase()
  const { data } = await api.get<Pokemon>(`/pokemon/${encodeURIComponent(key)}`)
  return data
}
