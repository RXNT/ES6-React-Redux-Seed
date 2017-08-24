import promise from 'es6-promise';

import appConstants from '../app.constants';
import apiProxy from './api-proxy.service';

module.exports = {
  logError: (message) => {
    const errorObject = {
      message,
    };

    return new promise.Promise((resolve, reject) => {
      apiProxy.post(appConstants.appInfo.apiServer
        + appConstants.apiRoutes.logErrorRoute, errorObject)
        .then((response) => {
          resolve(response.json());
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
