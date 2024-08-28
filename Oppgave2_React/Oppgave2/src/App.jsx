import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyHobbies from './MyHobbies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyHobbies></MyHobbies>
    </>
  )
}

export default App
