import { useState } from 'react'
import ControlButtons from './components/ControlButtons'
import Characters from './components/Characters'
import Planets from './components/Planets'
import Species from './components/Species'
import Films from './components/Films'

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
    ["Species", Species],
    ["Films", Films]
  ])
  const ActiveComponent = views.get(activeButton)

  function handleButtonClick(button: string) {
    setActiveButton(button)
  }

  return (
    <main className="p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Star Wars API</h1>
      <ControlButtons buttons={buttons} 
                      onButtonClick={handleButtonClick}/>
      {ActiveComponent && <ActiveComponent />}
    </main>
  )
}

export default App
