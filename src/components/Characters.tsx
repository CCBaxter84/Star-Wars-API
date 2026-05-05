import type { Character } from '../types/character'
import PaginationButtons from './PaginationButtons'
import usePaginatedFetch from '../hooks/usePaginatedList'

function Characters() {
  const { 
    results, isLoading,
    prevPage, nextPage, countMessage,
    handlePreviousClick,
    handleNextClick
  } = usePaginatedFetch<Character>('https://swapi.py4e.com/api/people')

    if (isLoading) {
        return (
            <article>
                <p>Loading...</p>
            </article>
        )
    }

    return (
        <section>
            <h2 style={{ textTransform: 'uppercase' }}>Characters:</h2>
            <article>
                {results.map(result => (
                    <h3 key={result.url}>{result.name}</h3>
                ))}
            </article>
            <h3>{`${countMessage} characters`}</h3>
            <PaginationButtons  prevPage={prevPage}
                                nextPage={nextPage}
                                handlePreviousClick={handlePreviousClick}
                                handleNextClick={handleNextClick} />
        </section>
    )
}

export default Characters