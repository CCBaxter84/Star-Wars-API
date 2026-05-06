import type { Planet } from '../types/planet'
import type { ApiResponse } from '../types/apiResponse'

import PaginatedList from './PaginatedList'
import Loading from './Loading'

import usePaginatedFetch from '../hooks/usePaginatedFetch'

function Planets() {
  const { 
    results, isLoading,
    prevPage, nextPage, countMessage,
    handlePreviousClick,
    handleNextClick
  } = usePaginatedFetch<ApiResponse<Planet>, Planet>(
    "https://swapi.tech/api/planets",
    {
      getResults: data => data.results,
      getTotal: data => data.total_records,
      getNext: data => data.next,
      getPrev: data => data.previous
    }
  )

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