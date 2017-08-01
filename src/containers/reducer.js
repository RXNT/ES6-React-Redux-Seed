import * as types from './constants';
import initialState from './initial.state';

export default function applicationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.CONTAINER_EHRV8_EXTN_APP_SPINNER_START:
      return {
        ...state,
        loading: true,
      };
    case types.CONTAINER_EHRV8_EXTN_APP_TOGGLE_LEFT_MENU:
      return {
        ...state,
        showLeftMenu: action.show,
      };
    case types.CONTAINER_EHRV8_EXTN_APP_TOGGLE_RIGHT_MENU:
      return {
        ...state,
        showRightMenu: action.show,
      };
    default:
      return state;
  }
}
