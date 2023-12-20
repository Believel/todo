import { Button, Flex } from 'antd'
import { switchToggle, selectToggleType, selectActiveTodosLength, clearCompletedTodos } from '../store/todosSlice'
import { useDispatch, useSelector } from 'react-redux'
export default function Footer() {
  const dispatch = useDispatch()
  const toggleType = useSelector(selectToggleType)
  const activeLength = useSelector(selectActiveTodosLength)

  const handleSwitch = (type) => {
    dispatch(switchToggle(type))
  }
  const showType = (type) => {

    return toggleType === type ? 'primary' : ''
  }
  return (
    <Flex justify='space-between' className='footer'>
      <Button type="text">{activeLength} item left</Button>
      <Flex gap="small" wrap="wrap">
        <Button onClick={() => handleSwitch('all')} type={showType('all')}>All</Button>
        <Button onClick={() => handleSwitch('active')} type={showType('active')}>Active</Button>
        <Button onClick={() => handleSwitch('completed')} type={showType('completed')}>Completed</Button>
      </Flex>
      <Button type="link" onClick={() => dispatch(clearCompletedTodos())}>
        clear completed
      </Button>
    </Flex>
  )
}