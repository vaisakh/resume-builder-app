import { NEW_PROJECT_INFO } from '../actions/types';

const initialState = {
  projects: {}
}

const projectInfoReducer = (state = initialState, action) => {
  switch( action.type ) {
    case NEW_PROJECT_INFO:
      return {
        ...state,
        projects: action.payload
      }
    default:
      return state;
  }
}

export default projectInfoReducer;
