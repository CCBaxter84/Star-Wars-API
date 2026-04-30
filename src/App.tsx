import { useEffect, useState, useCallback } from 'react'
import './App.css'
import type { ApiResponse } from './types/character'
import PaginationButtons from './components/PaginationButtons'

function App() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const totalCount = data?.count ?? 0
  const characterCount = data?.results.length ?? 0
  const characters = data?.results ?? []
  const prevPage = data?.previous ?? null
  const nextPage = data?.next ?? null

  const getPageNumber = (url: string | null) => {
    if (!url) return 0
    return Number(new URL(url).searchParams.get('page')) || 0
  }
  
  const currentPage =
    getPageNumber(nextPage) - 1 ||
    getPageNumber(prevPage) + 1 ||
    1
  const first = (currentPage - 1) * (characterCount) + 1
  const last = first + characterCount - 1
  const countMessage = `${first} to ${last} of ${totalCount} characters`

  const fetchCharacters = useCallback((url: string) => {
    setIsLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    fetchCharacters('https://swapi.py4e.com/api/people?page=1')
  }, [])

  function handlePreviousClick() {
    if (!data?.previous) return
    fetchCharacters(data.previous)
  }

  function handleNextClick() {
    if (!data?.next) return
    fetchCharacters(data.next)
  }

  if (isLoading) {
    return (
      <section>
        <h1>Star Wars API</h1>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>Star Wars API</h1>
      <article>
        {characters.map((character) => (
          <div key={character.url}>
            <h2>{character.name}</h2>
          </div>
        ))}
      </article>
      <h3>{countMessage}</h3>
      <PaginationButtons  prevPage={prevPage} 
                          nextPage={nextPage} 
                          handlePreviousClick={handlePreviousClick} 
                          handleNextClick={handleNextClick}/>
    </section>
  )
}

export default App
