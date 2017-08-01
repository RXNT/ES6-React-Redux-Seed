import * as types from './constants';
import initialState from './initial.state';

export default function timerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SHARED_FORMS_TIMER_UPDATE:
      return {
        ...state,
        hours: action.time.hours,
        minutes: action.time.minutes,
      };
    default:
      return state;
  }
}
