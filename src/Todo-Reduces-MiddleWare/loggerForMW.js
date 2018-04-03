import { createStore } from 'redux'
import todos from './reducers'

export default function logger({getState}){
    return next => action => {
        console.log('Captain - dispatching this action:', action)
        
        let returnActionValue = next(action);
        console.log('Captain - returned action value:', returnActionValue)
        console.log('Captain - after dispatch our state is:', getState())

        return returnActionValue
    }
}



 