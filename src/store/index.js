import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import todoReducer from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
  },
})

const currentDate = new Date()
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getUTCDate());
console.log(currentDate.getUTCDay());
console.log(currentDate.getUTCFullYear());
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());
console.log(currentDate.toUTCString());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toJSON());
console.log(currentDate.toLocaleTimeString());