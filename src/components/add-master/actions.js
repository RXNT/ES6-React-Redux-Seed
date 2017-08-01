import * as types from './constants';

export function load() {
  return function (dispatch) {
    dispatch({
      type: types.COMPONENTS_ADD_MASTER_SPINNER_START,
    });
    const employeeInfo = {
      id: 1,
      name: 'Test, Grays1',
      email: 'test1@gmail.com',
    };

    dispatch({
      type: types.COMPONENTS_ADD_MASTER_LOAD_SUCCESS,
      data: employeeInfo,
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
