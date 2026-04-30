import { useEffect, useState } from 'react'
import './App.css'
import type { Character } from './types/character'

function App() {
  const [ characters, setCharacters ] = useState<Character[]>([])
  const [ count, setCount ] = useState(0)
  const [ nextPage, setNextPage ] = useState<string | null>(null)
  const [ prevPage, setPrevPage ] = useState<string | null>(null)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://swapi.py4e.com/api/people?page=1')
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
  }, [])

  function handlePreviousClick() {
    if (!prevPage) return

    setIsLoading(true)
    fetch(prevPage)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setNextPage(data.next)
        setPrevPage(data.previous)
      })
      .catch(err => {
        console.error('Fetch failed:', err)
      })
      .finally(() => setIsLoading(false))
  }

  function handleNextClick() {
    if (!nextPage) return

    setIsLoading(true)
    fetch(nextPage)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
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
      <section className="ctrl-buttons">
        <article  className="is-flex is-justify-content-space-between">
          <button disabled={!prevPage}
                  onClick={handlePreviousClick}>
            Previous
          </button>
          <button disabled={!nextPage}
                  onClick={handleNextClick}>
            Next
          </button>
        </article>
      </section>
    </section>
  )
}

export default App
