import './ControlsButtons.css'

type Props = {
  buttons: string[],
  onButtonClick: (button: string) => void,
}

function ControlButtons({ buttons, onButtonClick }: Props) {
  return (
    <nav  style={{ marginBottom: '2rem' }}
          className="is-flex is-justify-content-space-between nav-buttons">
      {buttons.map((button) => (
        <button key={button} 
                className="button" 
                onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </nav>
  )
}

export default ControlButtons