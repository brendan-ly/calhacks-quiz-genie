import { useState } from 'react'
import HomePage from './Home Page/HomePage'
import './index.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
    </>
  )
}