import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getDoc } from "firebase/firestore";
// import { doc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

import { getDatabase, ref, get, child } from "firebase/database";

export const getTodos = createAsyncThunk("todos/getTodos", async (token) => {
  const dbRef = ref(getDatabase());
  try {
    const snapshot = await get(child(dbRef, `users/${token}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
});


const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      console.log(action);
      state.todoList = action.payload;
    });
  },
});

export default todoSlice.reducer;
