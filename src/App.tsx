import { useState } from 'react'
import { BaseButton } from '../demo-ui-lib'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hello!
      <BaseButton onClick={() => setCount(count => count + 1)}>Counted! {count}</BaseButton>
    </>
  )
}

export default App
