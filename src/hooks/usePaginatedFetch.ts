import { useState, useEffect } from "react"
import type { Extractors } from "../types/extractors"

function usePaginatedFetch<TData, TResult>(
  url: string,
  { getResults, getTotal, getNext, getPrev }: Extractors<TData, TResult>
) {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<TData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const results = data ? getResults(data) : []
  const total = data ? getTotal(data) : 0
  const prevPage = data ? getPrev(data) : null
  const nextPage = data ? getNext(data) : null

  const pageSize = 10
  const count = results.length
  const first = (page - 1) * pageSize + 1
  const last = first + count - 1
  const countMessage = `${first} to ${last} of ${total}`

  function fetchData(page: number) {
    setIsLoading(true)

    fetch(`${url}?page=${page}&limit=${pageSize}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setPage(page)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }

  function handlePreviousClick() {
    if (!prevPage) return
    fetchData(page - 1)
  }

  function handleNextClick() {
    if (!nextPage) return
    fetchData(page + 1)
  }

  useEffect(() => {
    fetchData(1)
  }, [url])

  return {
    page,
    data,
    isLoading,
    results,
    prevPage,
    nextPage,
    countMessage,
    handlePreviousClick,
    handleNextClick
  }
}

export default usePaginatedFetch