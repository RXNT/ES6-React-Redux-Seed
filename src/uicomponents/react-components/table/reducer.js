import * as types from './constants';
/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function tableReducer(state = {}, action = {}) {
  let updatedData;
  switch (action.type) {
    case types.LOAD_ALL:
      return {
        ...state,
        data: action.data,
      };
    case types.DELETE_ITEM:
      return {
        data: state.data.filter(item => item.id !== action.data),
      };
    case types.ADD_ITEM:
      return {
        ...state,
        data: [action.data, ...state.data],
      };
    case types.UPDATE_ITEM:
      updatedData = state.data.map(item => (
        (item.id === action.data.id) ? action.data : item
      ));
      return {
        ...state,
        data: updatedData,
      };
    default:
      return state;
  }
}
