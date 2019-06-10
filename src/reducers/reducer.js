import { SAVE_FIRST_STEP, SAVE_SECOND_STEP } from '../actions/type';

const initialState = {}

// Step 2 Reducer: state n action
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FIRST_STEP:
            return {
                ...state,
                saveFirstStep: action.payload
            };
        case SAVE_SECOND_STEP:
            return {
                ...state,
                saveSecondStep: action.payload
            };
        default:
            return state;
    }
}

export default reducer;