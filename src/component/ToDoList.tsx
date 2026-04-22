import ToDoItem from './ToDoItem'
import type { ToDo } from '../types'
import 'antd/dist/reset.css';
import { Card } from 'antd';
interface ToDoListprops {
  todos: ToDo[]
  deletetodo: (id: number) => void
  toggletodos: (id: number) => void
}

function ToDoList({ todos, deletetodo, toggletodos }: ToDoListprops) {

  return (
    <Card title="任务清单" style={{ margin: 20, backgroundColor: '#f5f5f5' }} >
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} deletetodo={deletetodo} toggletodos={toggletodos}></ToDoItem>
      ))}
    </Card>
  )
}
export default ToDoList
