export interface Tvshow {
  name: string
  summary: string
  network: string
  schedule: string
  status: string
  type: string
  genres: string
  website: string
  image: string
  rating: number
}

export interface Episode {
  name: string
  summary: string
  image: string
  number: string
  airdate: string
  runtime: string
  rating: number
}
