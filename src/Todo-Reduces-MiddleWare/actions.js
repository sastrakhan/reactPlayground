import { v4 } from 'uuid'

export const addTodo = (todoText) => 
    ({
        type: 'ADD_TODO',
        id: v4(),
        text: todoText
    })

export const removeTodo = (id) => 
    ({
        type: 'REMOVE_TODO',
        id
    })

export const getTodo = (text) => 
    ({
        type: 'GET_TODO',
        text
    })  
