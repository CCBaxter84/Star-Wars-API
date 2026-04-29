import { useEffect, useState } from 'react'
import './App.css'
import type { Character } from './types/character'

function App() {
  const [ characters, setCharacters ] = useState<Character[]>([])
  const [ count, setCount ] = useState(0)

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/people?page=1')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setCount(data.count)
      })
      .catch(err => {
        console.error('Fetch failed:', err)
      })
  }, [])
  return (
    <div>
      <h1>Star Wars API</h1>
      <h3>Total Characters: {count}</h3>
      <section>
        {characters.map((character) => (
          <div key={character.name}>
            <h2>{character.name}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
