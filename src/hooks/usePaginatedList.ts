import { useState, useEffect } from "react"
import type { ApiResponse } from "../types/apiResponse"

function usePaginatedFetch<T>(url: string) {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<ApiResponse<T> | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const total = data?.count ?? 0 
  const count = data?.results.length ?? 0
  const results = data?.results ?? []
  const prevPage = data?.previous ?? null
  const nextPage = data?.next ?? null

  const pageSize = count || 10
  const first = (page - 1) * pageSize + 1
  const last = first + count - 1
  const countMessage = `${first} to ${last} of ${total}`

  function fetchData(page: number) {
    setIsLoading(true)
    fetch(`${url}?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setPage(page)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }

    function handlePreviousClick() {
    if (!data?.previous) return
    fetchData(page - 1)
  }

  function handleNextClick() {
    if (!data?.next) return
    fetchData(page + 1)
  }

  useEffect(() => {
    fetchData(1)
  }, [])

  return {
    page,
    data,
    isLoading,
    fetchData,
    results,
    prevPage,
    nextPage,
    countMessage,
    handlePreviousClick,
    handleNextClick
  }
}

export default usePaginatedFetch