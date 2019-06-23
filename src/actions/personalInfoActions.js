import { NEW_PERSONAL_INFO } from './types';

export const newPerson = (formElements) => {
  return dispatch => {
    dispatch({
      type: NEW_PERSONAL_INFO,
      payload: formElements
    })
  }
}
