import { Button, Flex } from 'antd'
import { switchToggle, selectToggleType, filterTodos } from '../store/todosSlice'
import { useDispatch, useSelector } from 'react-redux'
export default function Footer() {
  const dispatch = useDispatch()
  const toggleType = useSelector(selectToggleType)

  const handleSwitch = (type) => {
    dispatch(switchToggle(type))
    dispatch(filterTodos())
  }
  const showType = (type) => {

    return toggleType === type ? 'primary' : ''
  }
  return (
    <Flex justify='space-between' className='footer'>
      <Button type="text">1 item left</Button>
      <Flex gap="small" wrap="wrap">
        <Button onClick={() => handleSwitch('all')} type={showType('all')}>All</Button>
        <Button onClick={() => handleSwitch('active')} type={showType('active')}>Active</Button>
        <Button onClick={() => handleSwitch('completed')} type={showType('completed')}>Completed</Button>
      </Flex>
      <Button type="link">
        clear completed
      </Button>
    </Flex>
  )
}