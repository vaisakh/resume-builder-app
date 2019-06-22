import { NEW_PERSONAL_INFO, FETCH_PERSONAL_INFO } from './types';

export function fetchPersonalInfo() {
  console.log("FETCH_PERSONAL_INFO Actions");
  dispatch({
    type: FETCH_PERSONAL_INFO,
    payload: personalInfo
  })
}
