import type { ToDo } from '../types'
import 'antd/dist/reset.css';
import { Card, Button } from 'antd';
interface ToDoItemprops {
  todo: ToDo
  deletetodo: (id: number) => void
  toggletodos: (id: number) => void
}
function ToDoItem({ todo, deletetodo, toggletodos }: ToDoItemprops) {

  return (
    <>
      <Card
        style={{ marginTop: 16, textDecoration: todo.status ? 'line-through' : 'none' }}
        type="inner"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {todo.text}
          <div>
            <Button onClick={() => toggletodos(todo.id)}>切换</Button>
            <Button onClick={() => deletetodo(todo.id)}>删除</Button>
          </div></div>
      </Card>

    </>
  )
}

export default ToDoItem
