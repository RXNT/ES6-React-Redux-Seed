import * as actionTypes from './constants';

export function toggleLeftMenu(show) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.CONTAINER_EHRV8_EXTN_APP_TOGGLE_LEFT_MENU,
      show,
    });
  };
}

export function toggleRightMenu(show) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.CONTAINER_EHRV8_EXTN_APP_TOGGLE_RIGHT_MENU,
      show,
    });
  };
}
