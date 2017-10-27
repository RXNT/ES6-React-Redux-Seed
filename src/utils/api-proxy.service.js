import 'whatwg-fetch';
import appSettings from '../app.constants';

const promise = require('es6-promise');

/**
 * This function verifies status of API response 
 * @param {object} response - response object returned from API services
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = {};
  error.ValidationMessages = [appSettings.messages.exceptionMessage];
  throw error;
}

module.exports = {
  post: (resourceUrl, params) => {
    const Promise = promise.Promise;
    // Prepare Headers
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      fetch(resourceUrl, {
        credentials: 'same-origin',
        method: 'post',
        headers: myHeaders,
        body: JSON.stringify(params),
      })
        .then(checkStatus)
        .then((response) => {
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  get: (resourceUrl, params) => {
    const Promise = promise.Promise;
    const requestHeaders = new Headers();
    requestHeaders.append('COntent-Type', 'application/json');

    return new Promise((resolve, reject) => {
      fetch(resourceUrl, {
        credentials: 'same-origin',
        method: 'get',
        headers: requestHeaders,
        body: JSON.stringify(params),
      })
        .then(checkStatus)
        .then((response) => {
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  delete: (resourceUrl, params) => {
    const Promise = promise.Promise;
    const requestHeaders = new Headers();
    requestHeaders.append('COntent-Type', 'application/json');

    return new Promise((resolve, reject) => {
      fetch(resourceUrl, {
        credentials: 'same-origin',
        method: 'delete',
        headers: requestHeaders,
        body: JSON.stringify(params),
      })
        .then(checkStatus)
        .then((response) => {
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  patch: (resourceUrl, params) => {
    const Promise = promise.Promise;
    const requestHeaders = new Headers();
    requestHeaders.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      fetch(resourceUrl, {
        credentials: 'same-origin',
        method: 'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(params),
      })
        .then(checkStatus)
        .then((response) => {
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
