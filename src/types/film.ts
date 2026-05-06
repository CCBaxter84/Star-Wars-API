export type FilmProperties = {
  created: string
  edited: string
  starships: string[]
  vehicles: string[]
  planets: string[]
  producer: string
  title: string
  episode_id: number
  director: string
  release_date: string
  opening_crawl: string
  characters: string[]
  species: string[]
  url: string
}

export type Film = {
  properties: FilmProperties
  _id: string
  description: string
  uid: string
  __v: number
}

export type Support = {
  contact: string
  donate: string
  partnerDiscounts: {
    saberMasters: {
      link: string
      details: string
    }
    heartMath: {
      link: string
      details: string
    }
  }
}

export type Social = {
  discord: string
  reddit: string
  github: string
}

export type FilmsApiResponse = {
  message: string
  apiVersion: string
  timestamp: string

  result: Film[]

  support: Support
  social: Social
}