import {  useState } from 'react'

import './App.css'

// this component renders a todo list, with task name, completion state and uses the ID as a key

type Todo = {
  id: number
  name: string
  completed: boolean
}  

function App() {

 const [todoList] = useState<Todo[]>([])

  return (
    <>
    <div className="App">
      <h1>Todo List</h1>
    </div>
    {todoList.map((todo) => (
      <div key={todo.id}>
       {todo.name}
      </div>))}
    </>
  )
}

export default App
