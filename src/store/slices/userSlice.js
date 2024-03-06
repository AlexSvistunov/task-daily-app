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

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2024, 4, 5);
//     }
//   }
// }


