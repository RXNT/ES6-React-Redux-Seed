import * as types from './constants';
import appConstants from '../../../app.constants';
import apiProxy from '../../../utils/api-proxy.service';
import logUtils from '../../../utils/log-utils';
/**
 * This function retrieves information from API and update state
 */
export function load() {
  return function (dispatch) {
    apiProxy.get(appConstants.appInfo.apiServer + appConstants.apiRoutes.searchMastersRoute)
      .then((response) => {
        dispatch({
          type: types.LOAD_ALL,
          data: response,
        });
      })
      .catch((e) => {
        logUtils.logError('Error occured while loading masters', e);
      });
  };
}

/**
 * Function to get a particular master record by id
 * @param {number} id - id of the master to be fetched from API
 */
export function remove(id) {
  return function (dispatch) {
    apiProxy.delete(appConstants.appInfo.apiServer
      + appConstants.apiRoutes.getMastersRoute
      + id)
      .then(() => {
        dispatch({
          type: types.DELETE_ITEM,
          data: id,
        })
          .catch((e) => {
            logUtils.logError(`Error occured while loading master id: ${id} with error: `, e);
          });
      });
  };
}

/**
 * 
 * @param {*} formValues 
 */
export function save(values) {
  return function (dispatch) {
    try {
      return apiProxy.post(appConstants.appInfo.apiServer
        + appConstants.apiRoutes.getMastersRoute,
      values)
        .then((response) => {
          dispatch({
            type: types.ADD_ITEM,
            data: response,
          });
        });
    } catch (e) {
      return logUtils.logError('Error occured while loading masters', e);
    }
  };
}

/**
 * 
 * @param {*} formValues 
 */
export function update(values) {
  return function (dispatch) {
    try {
      return apiProxy.patch(appConstants.appInfo.apiServer + // eslint-disable-line
        appConstants.apiRoutes.getMastersRoute + '/' + values[0] + '/',
      values[1])
        .then((response) => {
          dispatch({
            type: types.UPDATE_ITEM,
            data: response,
          });
        });
    } catch (e) {
      return logUtils.logError('Error occured while loading masters', e);
    }
  };
}
