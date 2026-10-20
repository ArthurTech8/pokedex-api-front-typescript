export interface NamedResource {
  name: string
  url: string
}

export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: NamedResource[]
}

export interface PokemonSummary {
  id: number
  name: string
  image: string
}

export interface PokemonType {
  slot: number
  type: NamedResource
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: NamedResource
}

export interface PokemonAbility {
  ability: NamedResource
  is_hidden: boolean
  slot: number
}

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  base_experience: number | null
  types: PokemonType[]
  stats: PokemonStat[]
  abilities: PokemonAbility[]
  sprites: {
    front_default: string | null
    other?: {
      'official-artwork'?: {
        front_default: string | null
      }
    }
  }
}
