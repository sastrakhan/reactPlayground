import { createStore, combineReducers, applyMiddleware } from 'redux';
import {colors} from './reducers'
import stateData from '../Data/initialState'

const logger = store => next => action => {
    let result
    console.log("dispatching", action.type) //Log in an accordian
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
}

const saver = store => next => action =>{
    let result = next(action)
    localStorage.clear()
    //localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) => //If not arguement then stateData is default
    //createStore argument gets passed into logger and/or saver
    //the madness below passes combineReducers and (localStore...) into createStore
    //CreateStore takes reducers as first argument and then storeState see below
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors}), (localStorage['redux-store']) ?
                                    JSON.parse(localStorage['redux-store']) :
                                    stateData
    )

    // let store = createStore(
    //     reducer,  
    //     ['Use Redux'],
    //     applyMiddleware(loggerMiddleware)
    //   )

export default storeFactory