// In redux toolkit, slices == features

import {createSlice, nanoid} from "@reduxjs/toolkit";
// nanoid = generates unique id

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
}

// Step-2 : Creating Slice (features)
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // In initialState "todos" is one of the state
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // *** Here, we will define the function here in redux;
        // *** While in ContextAPI we were using function declaration only
    }
})

// Step-3 : We have to export this in two parts
// **Exporting individual functionality bc we will use them in components
export const {addTodo, removeTodo} = todoSlice.actions
// **Export all the reducer and register them into the Store
export default todoSlice.reducer