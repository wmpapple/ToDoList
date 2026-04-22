"use client";
import { useState } from 'react'

import './App.css'
import AddToDo from './component/AddToDo'
import ToDoList from './component/ToDoList'
import ToDoListFliter from './component/ToDoListFliter'
import type { ToDo } from './types'

function App() {
  const [todos, setTodos] = useState<ToDo[]>([])
  const [filter, setFilter] = useState('all')

  const addtodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      status: false
    }
    setTodos([...todos, newTodo])
  }

  const deletetodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggletodos = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.status = !todo.status
      }
      return todo
    }))
  } // <--- 在这里提前闭合 toggletodos 函数

  // 将 getFilterTodos 和 return 移到 toggletodos 函数外部
  const getFilterTodos = () => {
    if (filter === 'all') {
      return todos
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.status)
    } else {
      return todos.filter(todo => !todo.status)
    }
  }

  return (
    <>
      <h1>ToDoLIST</h1>
      <AddToDo addtodo={addtodo}></AddToDo>
      <ToDoListFliter setFilter={setFilter}></ToDoListFliter>
      <ToDoList todos={getFilterTodos()} deletetodo={deletetodo} toggletodos={toggletodos}></ToDoList>

    </>
  )
}

export default App