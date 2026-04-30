import { useEffect, useState } from 'react'
import './App.css'
import type { Character } from './types/character'
import PaginationButtons from './components/PaginationButtons'

function App() {
  const [ characters, setCharacters ] = useState<Character[]>([])
  const [ count, setCount ] = useState(0)
  const [ nextPage, setNextPage ] = useState<string | null>(null)
  const [ prevPage, setPrevPage ] = useState<string | null>(null)
  const [ isLoading, setIsLoading ] = useState(true)

  const prevPageNumber = prevPage ? parseInt(prevPage.split('=')[1]) : 0
  const first = 1 + (prevPageNumber * characters.length)
  const last = first + characters.length - 1
  const countMessage = `${first} to ${last} of ${count} characters`

  useEffect(() => {
    fetchCharacters('https://swapi.py4e.com/api/people?page=1')
  }, [])

  function handlePreviousClick() {
    if (!prevPage) return
    fetchCharacters(prevPage)
  }

  function handleNextClick() {
    if (!nextPage) return
    fetchCharacters(nextPage)
  }

  function fetchCharacters(url: string) {
    setIsLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setCount(data.count)
        setNextPage(data.next)
        setPrevPage(data.previous)
      })
      .catch(err => {
        console.error('Fetch failed:', err)
      })
      .finally(() => setIsLoading(false))
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
          <div key={character.name}>
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
