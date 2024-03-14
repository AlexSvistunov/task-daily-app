import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  token: null,
  id: null,
  email: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.email = action.payload.email
      state.id = action.payload.id
      state.token = action.payload.token
    },
    removeUser: (state) => {
      state.email = null
      state.id = null
      state.token = null
    },

    
  }
})

export default userSlice.reducer

export const {setUser, removeUser} = userSlice.actions;



