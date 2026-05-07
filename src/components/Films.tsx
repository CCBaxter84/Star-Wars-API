import useFetch from "../hooks/useFetch"

import type { FilmsApiResponse, Film } from "../types/film"

import Loading from "./Loading"

function Films() {
  const { data, isLoading } = useFetch<FilmsApiResponse>("https://swapi.tech/api/films")

  if (isLoading) return <Loading />
  
  return (
    <div>
      <h2 style={{ textTransform: 'uppercase' }}>Films:</h2>
      <article>
        {data?.result?.map((film: Film) => (
          <h3 key={film._id}>{film.properties.title}</h3>
        ))}
      </article>
    </div>
  )
}

export default Films