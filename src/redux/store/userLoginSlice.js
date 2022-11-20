import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    isUserLogin: false
}


const userLoginSlice = createSlice({
    name: 'loginStatus',
    initialState, 
    reducers: {
        loginStatus(state){
           state.isUserLogin = true
        }
    }
})

export const {loginStatus} = userLoginSlice.actions; 
export default userLoginSlice.reducer; 