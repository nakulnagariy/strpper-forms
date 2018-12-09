import { SAVE_FIRST_STEP, SAVE_SECOND_STEP } from './type'; 

// ACTION CRETORS
export const saveFirstStep = (data) => (dispatch) => {
    dispatch({
        type: SAVE_FIRST_STEP,
        payload: data
    })
}

export const saveSecondStep = (data) => (dispatch) => {
    dispatch({
        type: SAVE_SECOND_STEP,
        payload: data
    })
}