import * as actionTypes from '../actions/type';

const initialState = {}

const saveFirstStep = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_FIRST_STEP:
            return {
                ...state,
                saveFirstStep: action.payload
            }
        default:
            return state
    }
}

export default saveFirstStep