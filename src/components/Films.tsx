import useFetch from "../hooks/useFetch"
import type { FilmsApiResponse, Film } from "../types/film"
import Loading from "./Loading"

function Films() {
  const URL = "https://swapi.tech/api/films"
  const { data, isLoading } = useFetch<FilmsApiResponse>(URL)

  if (isLoading) return <Loading />

  return (
    <div>
      <h2 className="text-2xl font-bold m-3">Films:</h2>
      <article>
        {data?.result?.map((film: Film) => (
          <h3 key={film._id}
              className="text-lg font-semibold">
            {film.properties.title}
          </h3>
        ))}
      </article>
    </div>
  )
}

export default Films