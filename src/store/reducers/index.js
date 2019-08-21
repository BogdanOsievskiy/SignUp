import { combineReducers } from 'redux';
import userInfo from './userInfo';
import screenValidation from './screenValidation';


const rootReducer = combineReducers({
    screenValidation,
    userInfo
})
export default rootReducer;