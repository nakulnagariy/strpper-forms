import * as actionTypes from '../actions/type';

const initialState = {}

const formikReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_FORMIK:
            return {
                ...state,
                saveFormik: action.payload
            }
        default:
            return state
    }
}

export default formikReducer