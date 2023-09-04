import { Increment } from "./CTypes";


const initialStage = {
    Counter: 100
}

export const CReduc = (state = initialStage, action) => {
    switch (action.type) { 
        case  Increment :
            return {
                ...state, // curly brackets in return
                Counter: state.Counter + 1
            }
            
            default: return state
    }
}

//here we are initializing the value to the counter we want to go global 
