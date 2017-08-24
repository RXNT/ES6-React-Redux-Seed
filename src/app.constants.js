export default {
  apiRoutes: {
    getCurrentClientVersion: '/rxntmaster/common/GetCurrentClientVersion/',
    logoutAppRoute: '/rxntmaster/authentication/Logout/',
    logErrorRoute: '/rxntmaster/common/LogError',
    mastersRoute: '/masters/',
  },
  messages: {
    validationMessage: 'Please correct the errors',
    exceptionMessage: 'Exception Occured. Please contact the administrator',
  },
  toastr: {
    timeOut: 5000,
  },
  appInfo: {
    applicationName: 'RxNTSeedApp',
    apiServer: 'http://localhost:3002',
  },
};
