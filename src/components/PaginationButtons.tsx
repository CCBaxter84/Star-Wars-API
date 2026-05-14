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
    <section className="w-full flex justify-center mt-4">
      <article  className="flex justify-between gap-4 w-[100%]">
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