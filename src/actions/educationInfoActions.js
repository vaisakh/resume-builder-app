import { NEW_EDUCATION_INFO } from './types';


export const newEducation = (formElements) => {
  return dispatch => {
    dispatch({
      type: NEW_EDUCATION_INFO,
      payload: formElements
    })
  }
}

