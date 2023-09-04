import { Iage } from "./MCtypes";
import { Dage } from "./MDtypes";


const initialStage =
{
    Myage: 25
}

export const MCreduc = (state = initialStage, action) => {
    switch (action.type) {
        case Iage :
            return {
                ...state,
                Myage: state.Myage + 1
            }
            case Dage :
                return {
                    ...state,
                    Myage: state.Myage -1
                }
        default: return state

    }
}