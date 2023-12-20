import { Layout, Card } from 'antd'
import { useSelector } from 'react-redux'
import '../assets/styles/home.scss'
import InputComponent from '../components/Input'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import { selectTodos } from '../store/todosSlice'

const { Header, Content } = Layout;

export default function Home() {
  const lists = useSelector(selectTodos)

  console.log(lists)

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