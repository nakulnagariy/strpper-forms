import { SAVE_STEP_1, SAVE_STEP_2 } from '../actions/type';

const initialState = {
    agreementForm: []
}

// Step 2 Reducer: state n action
export default (state = initialState, action) => {
    switch(action.type) {
        case SAVE_STEP_1:
            return {
                ...state,
                agreementForm: action.payload
            };
        case SAVE_STEP_2:
            return {
                ...state,
                agreementForm: action.payload
            };
        default:
            return state;    
    }
}