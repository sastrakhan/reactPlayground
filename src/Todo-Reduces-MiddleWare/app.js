import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import {addTodo} from "./actions"  
//check if you can do import *  instead of all these actions
import {getTodo} from "./actions"
import loggerMiddleware from "./loggerForMW"
import axios from 'axios'

//You should probably import
//Todos instead of reducers

let store = createStore(
    reducer,  
        //file only has CombineReducers from Todos 
        //(Switch statement with state modifications)
    ['Use Redux'],
    applyMiddleware(loggerMiddleware)
  )
   
    
  //store.dispatch(addTodo("We understand middleware bruh!"))


//No Middleware
// let store = createStore(reducer)

// store.dispatch(addTodo("Dodis"));
// store.dispatch(getTodo("Dodis"))
// console.log(store.getState())