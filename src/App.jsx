import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/ItemListContainer'
import Router from './components/Router/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router/>
    <h1>saludo</h1>
    <Saludo nombre="Erik"/>
    </>
  )
}

export default App