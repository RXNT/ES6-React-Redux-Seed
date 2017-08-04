import * as types from './constants';
import initialState from './initial.state';

export default function addMasterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.COMPONENTS_ADD_MASTER_SPINNER_START:
      return {
        ...state,
        loading: true,
      };
    case types.COMPONENTS_ADD_MASTER_SPINNER_STOP:
      return {
        ...state,
        loading: false,
      };
    case types.COMPONENTS_ADD_MASTER_SAVE:
      return {
        ...state,
        isSubmitted: action.isSubmitted,
      };
    default:
      return state;
  }
}
