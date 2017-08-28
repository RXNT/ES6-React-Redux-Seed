import * as types from './constants';
import appConstants from '../../app.constants';
import apiProxy from '../../utils/api-proxy.service';
import logUtils from '../../utils/log-utils';

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

export function saveInfo(formValues) {
  return function (dispatch) {
    try {
      return apiProxy.post(appConstants.appInfo.apiServer
        + appConstants.apiRoutes.searchMastersRoute,
      formValues)
        .then(() => {
          dispatch({
            type: types.COMPONENTS_ADD_MASTER_ACTION_SUCCESS,
            isSubmitted: true,
          });
        })
        .catch(() => {
          dispatch({
            type: types.COMPONENTS_ADD_MASTER_ACTION_FAILED,
            isSubmitted: true,
          });
        });
    } catch (e) {
      return logUtils.logError('Error occured while loading masters', e);
    }
  };
}
