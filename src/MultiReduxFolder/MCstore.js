import { createStore } from "redux";
import {RootReducer} from '../Component/RootReducer'

const store = createStore(RootReducer)
export default store