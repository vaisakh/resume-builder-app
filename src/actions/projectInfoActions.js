import { NEW_PROJECT_INFO } from './types';


export const newProject = (formElements) => {
  return dispatch => {
    dispatch({
      type: NEW_PROJECT_INFO,
      payload: formElements
    })
  }
}
