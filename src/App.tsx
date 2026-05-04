import './App.css'
import ControlButtons from './components/ControlButtons'
import Characters from './components/Characters'

function App() {
  const buttons = [
    "Films",
    "Characters",
    "Planets",
    "Species"
  ]
  return (
    <main>
      <h1 className="title">Star Wars API</h1>
      <ControlButtons buttons={buttons} />
      <Characters />
    </main>
  )
}

export default App
