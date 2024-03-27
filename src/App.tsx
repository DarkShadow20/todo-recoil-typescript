import './App.css'
import CompletedList from './components/CompletedList'
import CreateTodo  from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
    <div className='flex justify-around'>
      <div>
        <CreateTodo/>
      </div>
      <div>
        <TodoList/>
      </div>
      <div>
        <CompletedList/>
      </div>
    </div>
    </>
  )
}

export default App
