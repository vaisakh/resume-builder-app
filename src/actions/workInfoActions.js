import { NEW_WORK_INFO } from './types';

export const newWork = (formElements) => {
  return dispatch => {
    dispatch({
      type: NEW_WORK_INFO,
      payload: formElements
    })
  }
}
