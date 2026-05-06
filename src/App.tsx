import { useState } from 'react'
import './App.css'
import ControlButtons from './components/ControlButtons'
import Characters from './components/Characters'
import Planets from './components/Planets'
import Species from './components/Species'

function App() {
  const buttons = [
    "Films",
    "Characters",
    "Planets",
    "Species"
  ]

  const [activeButton, setActiveButton] = useState("Characters")
  const views = new Map<string, React.ComponentType>([
    ["Characters", Characters],
    ["Planets", Planets],
    ["Species", Species]
  ])
  const ActiveComponent = views.get(activeButton)

  function handleButtonClick(button: string) {
    setActiveButton(button)
  }

  return (
    <main>
      <h1 className="title">Star Wars API</h1>
      <ControlButtons buttons={buttons} 
                      onButtonClick={handleButtonClick}/>
      {ActiveComponent && <ActiveComponent />}
    </main>
  )
}

export default App
