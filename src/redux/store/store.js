import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./userLoginSlice";


const store= configureStore({
    reducer:{
        isUserLoggedIn: userLoginReducer
    }
})

export default store;