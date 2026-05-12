type Props = {
  buttons: string[],
  onButtonClick: (button: string) => void,
}

function ControlButtons({ buttons, onButtonClick }: Props) {
  return (
    <nav  style={{ marginBottom: '2rem' }}
          className="flex justify-space-between gap-4">
      {buttons.map((button) => (
        <button key={button} 
                className="btn btn-primary"
                onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </nav>
  )
}

export default ControlButtons