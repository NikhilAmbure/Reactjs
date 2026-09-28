// Step-1 : creating store
import {configureStore} from "@reduxjs/toolkit";
// Step-4 : Reducers Register
import todoReducer from '../features/todo/todoSlice.js'

export const store = configureStore({
    reducer: todoReducer
})


//***Note : Every Application has only one store