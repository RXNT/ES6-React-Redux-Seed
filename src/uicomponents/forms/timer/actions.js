import * as timerTypes from './constants';

function loadUpdateTimer(time) {
  return {
    type: timerTypes.SHARED_FORMS_TIMER_UPDATE,
    time,
  };
}

export function updateTimer(time) {
  return function (dispatch) {
    dispatch(loadUpdateTimer(time));
  };
}
