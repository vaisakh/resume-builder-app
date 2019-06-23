import { combineReducers } from 'redux';
import personalInfoReducer from './personalInfoReducer';


const rootReducer = combineReducers({
  personalInfo: personalInfoReducer
});


export default rootReducer;
