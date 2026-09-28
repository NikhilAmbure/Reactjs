import { useState } from 'react'
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  return (
    <>
      <h1>Hello World</h1>
        <AddTodo />
        <Todos />
    </>
  )
}

export default App
