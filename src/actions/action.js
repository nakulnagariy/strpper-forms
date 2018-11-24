import { SAVE_STEP_1, SAVE_STEP_2 } from './type'; 

// ACTION CRETORS
export const submitStep1 = (data) => (dispatch) => {
    dispatch({
        type: SAVE_STEP_1,
        payload: data
    })
}