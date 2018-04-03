export default function todos(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action]) //Combine arrays into one mega array
      case 'REMOVE_TODO':
        return state.filter(
            arrayItem => arrayItem.text != action.text
        )
       case 'GET_TODO':
        return state.find(
            arrayItem => arrayItem.text == action.text
        )
      default:
        return state
    }
  }