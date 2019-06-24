import { combineReducers } from 'redux';
import personalInfoReducer from './personalInfoReducer';
import workInfoReducer from './workInfoReducer';
import educationInfoReducer from './educationInfoReducer';
import projectInfoReducer from './projectInfoReducer';
import miscInfoReducer from './miscInfoReducer';
import { reducer as formReducer  } from 'redux-form';

const rootReducer = combineReducers({
  personalInfo: personalInfoReducer,
  workInfo: workInfoReducer,
  educationInfo: educationInfoReducer,
  projectInfo: projectInfoReducer,
  miscInfo: miscInfoReducer,
  form: formReducer
});


export default rootReducer;
