import { useState, useEffect } from "react"

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      fetchData()
    }, [url])

    return { data, isLoading }
}

export default useFetch