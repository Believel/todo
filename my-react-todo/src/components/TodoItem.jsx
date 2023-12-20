import { Checkbox } from "antd"
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { completedTodo, deleteTodo } from '../store/todosSlice'
export default function TodoItem(props) {
  const { todo } = props
  const dispatch = useDispatch()
  const onChange = () => {
    dispatch(completedTodo(todo.id))
  }
  const deleteItem = () => {
    dispatch(deleteTodo(todo.id))
  }
  return (
    <div className="item">
      <Checkbox checked={todo.completed} onChange={onChange}/>
      <div className={todo.completed ? 'text active' : 'text'}>
        {todo.text}
      </div>
      <DeleteOutlined onClick={deleteItem}/>
    </div>
  )
}