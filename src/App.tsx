import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import './App.css'
import Todo  from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RecoilRoot>
      <Todo/>
    </RecoilRoot>
    </>
  )
}

export default App
