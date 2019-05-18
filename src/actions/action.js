import * as actionTypes from './type'; 

// ACTION CRETORS
// export const saveFirstStep = (data) => (dispatch) => {
//     dispatch({
//         type: SAVE_FIRST_STEP,
//         payload: data
//     })
// }

// the below function is exactly the same as above with arrow functions
// export function saveFirstStep(data) {
//     return function(dispatch) {
//         dispatch({
//             type: SAVE_FIRST_STEP,
//             payload: data
//         })
//     }
// }

export const saveSecondStep = data => dispatch => {
    dispatch({
        type: actionTypes.SAVE_SECOND_STEP,
        payload: data
    })
}