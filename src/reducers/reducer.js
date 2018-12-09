import { SAVE_FIRST_STEP, SAVE_SECOND_STEP } from '../actions/type';

const initialState = {}

// Step 2 Reducer: state n action
export default (state = initialState, action) => {
    switch(action.type) {
        case SAVE_FIRST_STEP:
            return {
                ...state,
                firstStepDetails: action.payload
            };
        case SAVE_SECOND_STEP:
            return {
                ...state,
                secondStepDetails: action.payload
            };
        default:
            return state;    
    }
}