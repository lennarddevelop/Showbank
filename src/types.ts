export interface Show {
  id: number | null
  name: string | null
  image: {
    medium: string | null
    original: string | null
  } | null
  genres: string[] | null
  rating: {
    average: number | null
  }
  language: string | null
  premiered: string | null
  officialSite: string | null
  summary: string | null
  averageRuntime: number | null
}

export interface SearchResult {
  score: number
  show: Show
}
