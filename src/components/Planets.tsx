import type { Planet } from '../types/planet'

import PaginatedList from './PaginatedList'
import Loading from './Loading'

import usePaginatedFetch from '../hooks/usePaginatedList'

function Planets() {
  const { 
    results, isLoading,
    prevPage, nextPage, countMessage,
    handlePreviousClick,
    handleNextClick
  } = usePaginatedFetch<Planet>('https://swapi.tech/api/planets')

  if (isLoading) return <Loading />

  return <PaginatedList results={results}
                        entity="Planets"
                        countMessage={countMessage}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        handlePreviousClick={handlePreviousClick}
                        handleNextClick={handleNextClick} />
}

export default Planets