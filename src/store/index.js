import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import todoReducer from './slices/todoSlice'


// const object = {
//   3: {
//     name: 'Alex',
//     age: 19,
//   },
//   4: {
//     name: 'Pavel',
//     age: 19,
//   }
// }

// const arr = Object.keys(object)
// console.log(arr);

// console.log(Object.values(object));

// const arr2 = [2, 3, 4]

// if(Object.prototype.toString.call(arr2) === 'object Object') {
//   console.log('Это объект');
// } else {
//   console.log('Это чето другое');
// }

// console.log(Object.entries(object));

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
  },
})


