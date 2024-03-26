import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getDoc } from "firebase/firestore";
// import { doc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

import { getDatabase, ref, get, child } from "firebase/database";

export const getTodos = createAsyncThunk("todos/getTodos", async (token) => {
  const dbRef = ref(getDatabase());
  console.log(token);
  try {
    const snapshot = await get(child(dbRef, `users/${token}`));
    if (snapshot.exists()) {
      if (
        typeof snapshot.val() === "object" &&
        snapshot.val() !== null &&
        !Array.isArray(snapshot.val())
      ) {
        return Object.values(snapshot.val());
      }

      if (Array.isArray(snapshot.val())) {
        return snapshot.val().filter((el) => {
          if (el) {
            return el;
          }
        });
      } else {
        return [];
      }
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
  isLoading: false
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.isLoading = false
    });

    builder.addCase(getTodos.pending, (state, action) => {
      state.isLoading = true
    });
  },
});

export default todoSlice.reducer;
