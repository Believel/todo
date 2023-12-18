// configureStore 通过单个函数调用设置一个配置完善的 Redux store，包括合并 reducer、添加 thunk 中间件以及设置 Redux DevTools 集成。
// 与 createStore 相比更容易配置，因为它接受命名选项参数。
import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './todosSlice'
// configureStore 即可自动完成过去手动完成的常规配置工作:
// 1. slice reducers 自动传递给 combineReducers()
// 2. 自动添加了 redux-thunk 中间件
// 3. 添加了 Dev-mode 中间件来捕获意外的变更
// 4. 自动设置了 Redux DevTools Extension
// 5. 中间件和 DevTools 增强器被组合在一起添加到了 store 中
export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})