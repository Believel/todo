import TodoItem from "./TodoItem"
export default function TodoList(props) {
  const { lists } = props
  return (
    lists.map(item => (
      <TodoItem todo={item} key={item.id}/>
    ))
  )
}