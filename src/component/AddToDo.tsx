import { useState } from 'react'
import { Button, Input } from 'antd';
interface Addprops {
  addtodo: (text: string) => void
}
function AddToDo({ addtodo }: Addprops) {
  const [text, setText] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.trim() === '') {
      return
    }
    addtodo(text)
    setText('')
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
      <Input name={'清单'} type="text" placeholder="添加任务" value={text} onChange={e => setText(e.target.value)} />
      <Button color="default" variant="solid" style={{ marginLeft: 10, height: '40px' }}>添加</Button>
    </form>
  )

}
export default AddToDo