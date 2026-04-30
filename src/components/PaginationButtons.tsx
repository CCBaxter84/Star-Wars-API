type Props = {
    prevPage: string | null,
    nextPage: string | null,
    handlePreviousClick: () => void,
    handleNextClick: () => void
}

function PaginationButtons({ 
    prevPage,
    nextPage, 
    handlePreviousClick, 
    handleNextClick }: Props
) {
  return (
    <section className="ctrl-buttons">
      <article  className="is-flex is-justify-content-space-between">
        <button disabled={!prevPage}
                onClick={handlePreviousClick}>
          Previous
        </button>
        <button disabled={!nextPage}
                onClick={handleNextClick}>
          Next
        </button>
      </article>
    </section>
  )
}

export default PaginationButtons