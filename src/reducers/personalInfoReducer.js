import { NEW_PERSONAL_INFO } from '../actions/types';

const initialState = {
  person: {
    name: '',
    email: '',
    phone: '',
    address: '',
    skills: ''
  }
}

const personalInfoReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case NEW_PERSONAL_INFO:
      return {
        ...state,
        person: action.payload
      }
    default:
      return state;
  }
}


export default personalInfoReducer;
