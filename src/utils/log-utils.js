import uuidv1 from 'uuid/v1';

import appConstants from '../app.constants';
import apiProxy from './api-proxy.service';

module.exports = {
  logError: (message) => {
    const errorObject = {
      id: uuidv1(),
      message,
    };
    apiProxy.post(appConstants.appInfo.apiServer
      + appConstants.apiRoutes.logErrorRoute, errorObject)
      .then((response) => {
        console.log(response);
      });
  },
};
