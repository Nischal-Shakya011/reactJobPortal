import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
   "setReduxUser":(state, action)=>{
    // console.log(state);
    console.log(action);
    state.value = action.payload
   },

   "logout":(state)=>{
    state.value = null
    localStorage.removeItem("access_token")
   }
  },
})

// Action creators are generated for each case reducer function
export const { setReduxUser, logout } = userSlice.actions

export default userSlice.reducer