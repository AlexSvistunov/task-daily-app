import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  token: localStorage.getItem('token')?.length ? localStorage.getItem('token') : null,
  id: null,
  email: localStorage.getItem('email')?.length ? localStorage.getItem('email') : null,
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
      localStorage.removeItem('token')
      localStorage.removeItem('email')
    },

    
  }
})

export default userSlice.reducer

export const {setUser, removeUser} = userSlice.actions;



