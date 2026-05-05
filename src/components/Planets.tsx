import type { Planet } from '../types/planet'

import PaginationButtons from './PaginationButtons'
import Loading from './Loading'

import usePaginatedFetch from '../hooks/usePaginatedList'

function Planets() {
  const { 
    results, isLoading,
    prevPage, nextPage, countMessage,
    handlePreviousClick,
    handleNextClick
  } = usePaginatedFetch<Planet>('https://swapi.py4e.com/api/planets')

  if (isLoading) return <Loading />

  return (
    <section>
      <h2 style={{ textTransform: 'uppercase' }}>Planets:</h2>
      <article>
          {results.map(result => (
              <h3 key={result.url}>{result.name}</h3>
          ))}
      </article>
      <h3>{`${countMessage} planets`}</h3>
      <PaginationButtons  prevPage={prevPage}
                          nextPage={nextPage}
                          handlePreviousClick={handlePreviousClick}
                          handleNextClick={handleNextClick} />
    </section>
  )
}

export default Planets