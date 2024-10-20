import { useState } from 'react'
import HomePage from './Home Page/HomePage'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App