import 'whatwg-fetch';
import appSettings from '../app.constants';

const promise = require('es6-promise');

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
};
