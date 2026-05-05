import type { Character } from '../types/character'

import Loading from './Loading'
import PaginatedList from './PaginatedList'

import usePaginatedFetch from '../hooks/usePaginatedList'


function Characters() {
    const { 
        results, isLoading,
        prevPage, nextPage, countMessage,
        handlePreviousClick,
        handleNextClick
    } = usePaginatedFetch<Character>('https://swapi.tech/api/people')

    if (isLoading) return <Loading />

    return <PaginatedList   results={results}
                            entity="Characters"
                            countMessage={countMessage}
                            prevPage={prevPage}
                            nextPage={nextPage}
                            handlePreviousClick={handlePreviousClick}
                            handleNextClick={handleNextClick} />
}

export default Characters