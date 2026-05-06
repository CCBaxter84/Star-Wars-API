export type Extractors<T, R> = {
  getResults: (data: T) => R[]
  getTotal: (data: T) => number
  getNext: (data: T) => string | null
  getPrev: (data: T) => string | null
}