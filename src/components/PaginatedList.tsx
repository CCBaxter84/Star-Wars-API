import PaginationButtons from "./PaginationButtons"

type Props = {
  results: any[],
  entity: string,
  countMessage: string
  prevPage: string | null
  nextPage: string | null
  handlePreviousClick: () => void
  handleNextClick: () => void
}

function PaginatedList({ 
  results, countMessage, entity,
  prevPage, nextPage, 
  handlePreviousClick, handleNextClick 
}: Props) {
  return (
    <section className="w-lg flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold m-3">{entity}:</h2>
      <article className="mb-6">
        {results.map(result => (
            <h3 key={result.url} 
                className="text-lg font-semibold">
              {result.name}
            </h3>
        ))}
      </article>
      <h3 className="font-bold italic">{`${countMessage} ${entity}`}</h3>
      <PaginationButtons  prevPage={prevPage}
                          nextPage={nextPage}
                          handlePreviousClick={handlePreviousClick}
                          handleNextClick={handleNextClick} />
    </section>
  )
}

export default PaginatedList