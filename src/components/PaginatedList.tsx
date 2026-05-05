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
    <section>
      <h2 style={{ textTransform: 'uppercase' }}>{entity}:</h2>
      <article>
        {results.map(result => (
            <h3 key={result.url}>{result.name}</h3>
        ))}
      </article>
      <h3>{`${countMessage} ${entity}`}</h3>
      <PaginationButtons  prevPage={prevPage}
                          nextPage={nextPage}
                          handlePreviousClick={handlePreviousClick}
                          handleNextClick={handleNextClick} />
    </section>
  )
}

export default PaginatedList