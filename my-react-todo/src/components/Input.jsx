import { useState } from 'react'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todosSlice'
export default function InputComponent() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    const text = e.target.value.trim()
    if (e.which === 13 ) {
      dispatch(addTodo(text))
    }
    setText('')
  }

  return (
    <Input placeholder='What needs to be done?' onKeyDown={handleSubmit} value={text} onChange={e => setText(e.target.value)} />
  )
}