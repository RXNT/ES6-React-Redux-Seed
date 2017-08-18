import * as types from './constants';
import appConstants from '../../app.constants';
import apiProxy from '../../utils/api-proxy.service';

export function startSpinner() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_SEARCH_MASTER_SPINNER_START,
    });
  };
}

export function stopSpinner() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_SEARCH_MASTER_SPINNER_STOP,
    });
  };
}

export function load() {
  return function (dispatch) {
    apiProxy.get(appConstants.appInfo.apiServer + appConstants.apiRoutes.employeesRoute)
      .then((response) => {
        dispatch({
          type: types.COMPONENTS_SEARCH_MASTER_LOAD_SUCCESS,
          data: response,
        });
      })
      .catch(() => {
        console.log('Error occured while loading employees');
      });
  };
}
