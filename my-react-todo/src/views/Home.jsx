import { Layout, Card } from 'antd'
import { useSelector } from 'react-redux'
import '../assets/styles/home.scss'
import InputComponent from '../components/Input'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import { selectTodos, selectToggleType, selectCompletedFilteredTodos, selectActiveFilteredTodos } from '../store/todosSlice'

const { Header, Content } = Layout;

export default function Home() {
  const toggletype = useSelector(selectToggleType)
  const handleTodos = toggletype === 'all' ? selectTodos : toggletype === 'active' ?  selectActiveFilteredTodos : selectCompletedFilteredTodos
  const lists = useSelector(handleTodos)

  return (
    <Layout className='home'>
      <Header className='title'>todos</Header>
      <Content className='content'>
        <InputComponent/>
        <Card style={{marginTop: '30px'}}>
          <TodoList lists={lists}/>
          <Footer></Footer>
        </Card>
      </Content>
    </Layout>
  )
}