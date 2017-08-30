import * as authTypes from './constants';

/**
 * This function update state information to start spinner
 */
function spinnerStart() {
  return { type: authTypes.STORE_SPINNER_START };
}

/**
 * This function used to authenticate user
 */
export function authenticateUser() {
  return function (dispatch, getState) { // eslint-disable-line no-unused-vars
    dispatch(spinnerStart());
    try {
      const versionConflict = false; // Call API Service to fetch value

      dispatch({
        type: authTypes.STORE_VERSION_MISMATCH_SUCCESS,
        versionConflict,
      });
    } catch (error) {
      //  Log Error by Calling API Service
    }
  };
}
