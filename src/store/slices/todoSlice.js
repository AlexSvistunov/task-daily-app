import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";


export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (email, thunkAPI) => {
    const myData = doc(db, 'users', email)
    const docSnap = await getDoc(myData)
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return [];
    }
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