import * as types from './constants';
import appConstants from '../../app.constants';
import apiProxy from '../../utils/api-proxy.service';
import logUtils from '../../utils/log-utils';

/**
 * This function update state information to start spinner
 */
export function startSpinner() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_ADD_STUDENT_SPINNER_START,
    });
  };
}

/**
 * This function update state information to stop spinner
 */
export function stopSpinner() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_ADD_STUDENT_SPINNER_STOP,
    });
  };
}

/**
 * This function saves information to database
 * @param {object} formValues - form data entered by user
 */
export function saveInfo(formValues) {
  return function (dispatch) {
    startSpinner();
    try {
      return apiProxy.post(appConstants.appInfo.apiServer
        + appConstants.apiRoutes.searchStudentsRoute,
      formValues)
        .then(() => {
          stopSpinner();
          dispatch({
            type: types.COMPONENTS_ADD_STUDENT_ACTION_SUCCESS,
            isSubmitted: true,
          });
        })
        .catch(() => {
          stopSpinner();
          dispatch({
            type: types.COMPONENTS_ADD_STUDENT_ACTION_FAILED,
            isSubmitted: true,
          });
        });
    } catch (e) {
      stopSpinner();
      return logUtils.logError('Error occured while loading students', e);
    }
  };
}

/**
 * Function to get a particular STUDENT record by id
 * @param {number} id - id of the STUDENT to be fetched from API
 */
export function getById(id) {
  return function (dispatch) {
    startSpinner();
    apiProxy.get(appConstants.appInfo.apiServer
      + appConstants.apiRoutes.getStudentsRoute
      + id)
      .then((response) => {
        stopSpinner();
        dispatch({
          type: types.COMPONENTS_ADD_STUDENT_ACTION_LOAD_ITEM,
          data: response,
        })
          .catch((e) => {
            stopSpinner();
            logUtils.logError(`Error occured while loading student id: ${id} with error: `, e);
          });
      });
  };
}

/**
 * Function to reset the data object
 */
export function reset() {
  return {
    type: types.COMPONENTS_ADD_STUDENT_ACTION_RESET,
    data: {},
  };
}
