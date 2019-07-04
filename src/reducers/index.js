import { combineReducers } from 'redux';
import formReducer from './reducer';
import formikReducer from './formik-reducer'
import saveFirstStepReducer from './saveFirstStep-reducer'

const rootReducer = combineReducers({
    formReducer: formReducer,
    formikReducer: formikReducer,
    firstStepReducer: saveFirstStepReducer
});

export default rootReducer;