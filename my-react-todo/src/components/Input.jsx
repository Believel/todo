import { useState } from 'react'
import { Input, Space, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todosSlice'
export default function InputComponent() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const add = () => {
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input
      placeholder='What needs to be done?'
      value={text}
      onChange={e => setText(e.target.value)}
      allowClear />
      <Button type="primary" onClick={add}>新增</Button>
    </Space.Compact>
  )
}