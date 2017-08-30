import * as timerTypes from './constants';

/**
 * This function update state with time remaining to expire session
 * @param {string} time - string format of time
 */
export function updateTimer(time) {
  return function (dispatch) {
    dispatch({
      type: timerTypes.SHARED_FORMS_TIMER_UPDATE,
      time,
    });
  };
}
