import { combineReducers } from 'redux';
import formReducer from './reducer';
import formikReducer from './formik-reducer'

const rootReducer = combineReducers({
    formReducer: formReducer,
    formikReducer: formikReducer
});

export default rootReducer;