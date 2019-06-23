import { NEW_MISC_INFO } from './types';

export const newMisc = (formElements) => {
  return dispatch => {
    dispatch({
      type: NEW_MISC_INFO,
      payload: formElements
    })
  }
}

