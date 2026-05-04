import './ControlsButtons.css'

function ControlButtons({ buttons }: { buttons: string[] }) {
  return (
    <nav  style={{ marginBottom: '2rem' }}
          className="is-flex is-justify-content-space-between nav-buttons">
      {buttons.map((button) => (
        <button key={button} className="button">{button}</button>
      ))}
    </nav>
  )
}

export default ControlButtons