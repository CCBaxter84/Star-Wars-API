import type { SpeciesType } from '../types/species'

import Loading from './Loading'
import PaginatedList from './PaginatedList'

import usePaginatedFetch from '../hooks/usePaginatedList'


function Species() {
    const { 
        results, isLoading,
        prevPage, nextPage, countMessage,
        handlePreviousClick,
        handleNextClick
    } = usePaginatedFetch<SpeciesType>('https://swapi.tech/api/species')

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