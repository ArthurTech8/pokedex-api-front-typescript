const ARTWORK_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

// A lista da API só traz { name, url }; o id é o último segmento da url.
export function getIdFromUrl(url: string): number {
  const parts = url.split('/').filter(Boolean)
  return Number(parts[parts.length - 1])
}

export function getArtworkUrl(id: number): string {
  return `${ARTWORK_BASE}/${id}.png`
}

export function formatId(id: number): string {
  return `#${String(id).padStart(3, '0')}`
}

export function formatName(name: string): string {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
