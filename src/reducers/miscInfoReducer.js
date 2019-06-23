import { NEW_MISC_INFO } from '../actions/types';

const initialState = {
  misc: {}
}

const miscInfoReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case NEW_MISC_INFO:
      return {
        ...state,
        misc: action.payload
      }
    default:
      return state;
  }
}

export default miscInfoReducer;
