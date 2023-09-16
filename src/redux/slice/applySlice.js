import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const applySlice = createSlice({
  name: 'apply',
  initialState,
  reducers: { 
   "setReduxapply":(state, action)=>{
    console.log(action);
    state.value = action.payload
   }
  },
})

// Action creators are generated for each case reducer function
export const { setReduxapply } = applySlice.actions

export default applySlice.reducer