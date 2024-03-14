import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getDoc } from "firebase/firestore";
// import { doc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

import { getDatabase, ref, onValue, get, child } from "firebase/database";


export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (token) => {
  // const db = getDatabase();
  // const starCountRef = ref(db, 'users/' + token + '/' + '1');
  // onValue(starCountRef, (snapshot) => {
  //   console.log(snapshot);
  //   const data = snapshot.val();
  //   return data
  // });

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${token}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val()
  } else {

    console.log("No data available");
    return []
  }
}).catch((error) => {
  console.error(error);
});
  }
) 
  
  const initialState = {
    todoList: [],
  }

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    
  },
  
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todoList = action.payload
    })
  }
})

export default todoSlice.reducer
// "todos/getTodos",
// async (email, thunkAPI) => {
//   const myData = doc(db, 'users', email)
//   const docSnap = await getDoc(myData)
//   if (docSnap.exists()) {
//     return docSnap.data();
//   } else {
//     console.log("No such document!");
//     return [];
//   }
// }