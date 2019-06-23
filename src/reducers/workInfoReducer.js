import { NEW_WORK_INFO } from '../actions/types';

const initialState = {
  work: {}
}


const workInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_WORK_INFO:
      return {
        ...state,
        work: action.payload
      }
    default:
      return state;
  }
}

export default workInfoReducer;
