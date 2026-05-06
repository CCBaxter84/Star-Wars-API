import type { SpeciesType } from '../types/species'
import type { ApiResponse } from '../types/apiResponse'

import Loading from './Loading'
import PaginatedList from './PaginatedList'

import usePaginatedFetch from '../hooks/usePaginatedFetch'


function Species() {
  const { 
    results, isLoading,
    prevPage, nextPage, countMessage,
    handlePreviousClick,
    handleNextClick
  } = usePaginatedFetch<ApiResponse<SpeciesType>, SpeciesType>(
    "https://swapi.tech/api/species",
    {
      getResults: data => data.results,
      getTotal: data => data.total_records,
      getNext: data => data.next,
      getPrev: data => data.previous
    }
  )

    if (isLoading) return <Loading />

    return <PaginatedList   results={results}
                            entity="Characters"
                            countMessage={countMessage}
                            prevPage={prevPage}
                            nextPage={nextPage}
                            handlePreviousClick={handlePreviousClick}
                            handleNextClick={handleNextClick} />
}

export default Species