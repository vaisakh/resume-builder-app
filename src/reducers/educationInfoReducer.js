import { NEW_EDUCATION_INFO } from '../actions/types';

const initialState = {
  education: {}
}

const educationInfoReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case NEW_EDUCATION_INFO:
      return {
        ...state,
        education: action.payload
      }
    default:
      return state;
  }
}

export default educationInfoReducer;
