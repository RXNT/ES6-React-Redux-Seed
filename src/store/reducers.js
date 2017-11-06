import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import authReducer from './auth.reducer';
import applicationReducer from '../containers/reducer';
import searchMasterReducer from '../components/search-master/reducer';
import searchStudentReducer from '../components/search-student/reducer';
import addMasterReducer from '../components/add-master/reducer';
import timerReducer from '../uicomponents/forms/timer/reducer';
import tableReducer from '../uicomponents/react-components/table/reducer';
import addStudentReducer from '../components/add-student/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  routing: routerReducer,
  auth: authReducer,
  searchMasterReducer,
  applicationReducer,
  timerReducer,
  addMasterReducer,
  tableReducer,
  searchStudentReducer,
  addStudentReducer,
});

export default rootReducer;
