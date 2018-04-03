import storeFactory from "./Store_and_Reducers/Middleware"
import { addColor } from "./Actions"

const store = storeFactory()
store.dispatch(addColor("#FFFFFF", "White flight"))

export default store;