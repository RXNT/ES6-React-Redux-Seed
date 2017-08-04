import * as types from './constants';

export function startSpinner() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_ADD_MASTER_SPINNER_START,
    });
  };
}

export function stopSpinner() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_ADD_MASTER_SPINNER_STOP,
    });
  };
}

export function saveInfo() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_ADD_MASTER_SAVE,
      isSubmitted: true,
    });
  };
}
