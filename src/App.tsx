import { RecoilRoot } from 'recoil'
import './App.css'
import CreateTodo  from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
    <RecoilRoot>
      <CreateTodo/>
      <TodoList/>
    </RecoilRoot>
    </>
  )
}

export default App
