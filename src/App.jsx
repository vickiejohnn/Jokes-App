import { useState } from 'react'
import './App.css'
import Hook from './Components/Hook'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Hook />
    </>
  )
}

export default App
