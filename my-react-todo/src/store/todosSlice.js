// Redux Toolkit 简化了编写 Redux 逻辑和设置 store 的过程
// createSlice 让你使用 Immer 库 来编写 reducer，
// 可以使用 "mutating" JS 语法，比如 state.value = 123，不需要使用拓展运算符。
// 内部基于你的 reducer 名称生成 action type 字符串。最后，它在 TypeScript 中表现的很好。

import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 0,
        text: '吃饭',
        completed: false
      }
    ],
    toggleType: 'all'
  },
  reducers: {
    // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
    // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
    // 基于这些更改的不可变的 state。
    addTodo: (state, action) => {
      state.items.push({
        text: action.payload,
        completed: false,
        id: `todo-${Math.random() * 100}`
      })
    },
    completedTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    deleteTodo: (state, action) => {
      const index = state.items.findIndex(todo => todo.id === action.payload)
      state.items.splice(index, 1)
    },
    switchToggle: (state, action) => {
      state.toggleType = action.payload
    },
    filterTodos: state => {
      state.newItems = state.items.filter(todo => {
        if (state.switchToggle === 'completed' && todo.completed) {
          return true
        } else if (state.switchToggle === 'active' && !todo.completed) {
          return true
        }
      })
    }
  }
})
export const selectTodos = (state) => state.todos.items;
export const selectToggleType = (state) => state.todos.toggleType

// 所有的 action creators 和 action types 都自动生成了，reducer 代码也更短更易懂。
// 在每个 case 中更清楚地展示了实际更新了哪些内容，整体逻辑也更为清晰。
export const { addTodo, completedTodo, deleteTodo, switchToggle, filterTodos } = todosSlice.actions

export default todosSlice.reducer