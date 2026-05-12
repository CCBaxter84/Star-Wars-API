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
    <section className="max-w-[350px] w-full">
      <article  className="flex justify-space-between gap-4">
        <button className="btn btn-primary"
                disabled={!prevPage}
                onClick={handlePreviousClick}>
          Previous
        </button>
        <button disabled={!nextPage}
                className="btn btn-primary"
                onClick={handleNextClick}>
          Next
        </button>
      </article>
    </section>
  )
}

export default PaginationButtons