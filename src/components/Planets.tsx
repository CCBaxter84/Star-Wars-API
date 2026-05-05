import { useEffect, useState } from 'react'
import type { ApiResponse } from '../types/planet'
import PaginationButtons from './PaginationButtons'

function Planets() {
    const [page, setPage] = useState(1)
    const [data, setData] = useState<ApiResponse | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const totalCount = data?.count ?? 0
    const planetCount = data?.results.length ?? 0
    const planets = data?.results ?? []
    const prevPage = data?.previous ?? null
    const nextPage = data?.next ?? null

    const pageSize = 10
    const first = (page - 1) * pageSize + 1
    const last = first + planetCount - 1
    const countMessage = `${first} to ${last} of ${totalCount} planets`

    function fetchPlanets(page: number) {
        setIsLoading(true)
        fetch(`https://swapi.py4e.com/api/planets?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setPage(page)
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetchPlanets(page)
    }, [])

    function handlePreviousClick() {
        if (!data?.previous) return
        fetchPlanets(page - 1)
    }

    function handleNextClick() {
        if (!data?.next) return
        fetchPlanets(page + 1)
    }

    if (isLoading) {
        return (
            <article>
                <p>Loading...</p>
            </article>
        )
    }

    return (
        <section>
            <h2 style={{ textTransform: 'uppercase' }}>Planets:</h2>
            <article>
                {planets.map(planet => (
                    <h3 key={planet.url}>{planet.name}</h3>
                ))}
            </article>
            <h3>{countMessage}</h3>
            <PaginationButtons  prevPage={prevPage}
                                nextPage={nextPage}
                                handlePreviousClick={handlePreviousClick}
                                handleNextClick={handleNextClick} />
        </section>
    )
}

export default Planets