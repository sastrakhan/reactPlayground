import C from '../constants'

//Which of these ADD_COLOR is chosen?   

export const color = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            }
        // case C.RATE_COLOR:
        //     return (state.id !== action.id) ?
        //         state :
        //         {
        //             ...state,
        //             rating: action.rating
        //         }
        default :
            return state
    }
}

export const colors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR :
            return [  //Create Array with exisiting State plus new color
                ...state,
                color({}, action)
            ]
        // case C.RATE_COLOR :
        //     return state.map(
        //         c => color(c, action)
        //     )
        case C.HIGH_LIGHT_COLOR: 
            return [
                //FINISH HERE MAKING HIGHLIGHT COLOR
            ]
        case C.REMOVE_COLOR :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}