import * as types from './constants';
import initialState from './initial.state';

/**
 * Reducer which is reponsible to update state
 * @param {object} state - existing state information
 * @param {object} action - new state information 
 */
export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.STORE_SPINNER_START:
      return {
        ...state,
        loading: true,
        validationMessages: null,
      };
    case types.STORE_VERSION_MISMATCH_SUCCESS:
      return {
        ...state,
        loading: false,
        validationMessages: null,
        versionConflict: action.versionConflict,
      };
    default:
      return state;
  }
}
