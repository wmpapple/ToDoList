
import { Button } from 'antd';
interface ToDoListFliterprops {
  setFilter: (filter: 'all' | 'pending' | 'completed') => void
}
function ToDoListFliter({ setFilter }: ToDoListFliterprops) {

  return (
    <div style={{ marginTop: 20, marginLeft: 800 }}>
      <Button onClick={() => setFilter('all')}>全部</Button>
      <Button onClick={() => setFilter('pending')}>待办</Button>
      <Button onClick={() => setFilter('completed')}>已办</Button>
    </div>
  )
}

export default ToDoListFliter