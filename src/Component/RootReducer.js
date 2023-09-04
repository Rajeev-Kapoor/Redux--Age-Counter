// for using two state we have to combine
// two state reducer and the send to store
import { combineReducers } from "redux";
import { CReduc } from "../ReduxFolder/CReducer";
import { MCreduc } from "../MultiReduxFolder/MCreducer";
//store will remain same
export const RootReducer = combineReducers({
    Myages:MCreduc,
    Counters:CReduc
})
  