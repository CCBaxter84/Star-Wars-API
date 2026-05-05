export type SocialLinks = {
  discord: string
  reddit: string
  [key: string]: string // allows extra links if API expands
}

export type SupportInfo = {
  email: string
  website: string
}

export type ApiResponse<T> = {
  apiVersion: string
  message: string
  next: string | null
  previous: string | null
  results: T[]
  social: SocialLinks
  support: SupportInfo
  timestamp: string
  total_pages: number
  total_records: number
}