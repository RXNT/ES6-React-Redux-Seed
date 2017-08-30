import * as actionTypes from './constants';

/**
 * This function update state information to toggle left menu
 * @param {boolean} show - show/hide left menu
 */
export function toggleLeftMenu(show) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.CONTAINER_EHRV8_EXTN_APP_TOGGLE_LEFT_MENU,
      show,
    });
  };
}

/**
 * This function update state information to toggle right menu
 * @param {boolean} show - show/hide right menu
 */
export function toggleRightMenu(show) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.CONTAINER_EHRV8_EXTN_APP_TOGGLE_RIGHT_MENU,
      show,
    });
  };
}
