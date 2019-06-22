import { FETCH_PERSONAL_INFO, NEW_PERSONAL_INFO } from '../actions/types';

const initialState = {
  name: 'vaisakh',
  email: '',
  phone: '',
  address: '',
  skills: ''
}

const personalInfoReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case FETCH_PERSONAL_INFO:
      console.log("FETCH_PERSONAL_INFO Reducer", action.payload);
      return {
        ...state,
        name: action.payload.name
      }
      break;
    default:
      return state;
  }
}


export default personalInfoReducer;
