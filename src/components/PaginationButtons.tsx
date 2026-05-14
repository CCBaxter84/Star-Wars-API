import Button from "./Button"

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
        <Button disabled={!prevPage} 
                handleClick={handlePreviousClick}>
          Previous
        </Button>
        <Button disabled={!nextPage} 
                handleClick={handleNextClick}>
          Next
        </Button>
      </article>
    </section>
  )
}

export default PaginationButtons