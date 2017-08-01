import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);

module.exports = {
  getBrowser: () => {
    const isOpera = (!!window.opr && !!opr.addons) || !!window.opera
                    || navigator.userAgent.indexOf(' OPR/') >= 0;
    const isFirefox = typeof InstallTrigger !== 'undefined';
    const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    const isIE = false || !!document.documentMode;
    const isEdge = !(isIE) && !!window.StyleMedia;
    const isChrome = !!window.chrome && !!window.chrome.webstore;
    const isBlink = (isChrome || isOpera) && !!window.CSS;
    let browser;

    if (isOpera) {
      browser = 'opera';
    } else if (isFirefox) {
      browser = 'firefox';
    } else if (isSafari) {
      browser = 'safari';
    } else if (isIE) {
      browser = 'ie';
    } else if (isEdge) {
      browser = 'edge';
    } else if (isChrome) {
      browser = 'chrome';
    } else if (isBlink) {
      browser = 'blink';
    } else {
      browser = 'unknown';
    }
    return browser;
  },
  getDevice: () => {
    const device = md.mobile();
    let deviceType = '';
    if (device !== '' && device !== null && device !== undefined) {
      deviceType = 'mobile';
    } else {
      deviceType = 'desktop';
    }

    return deviceType;
  },
  getUTCDate: () => {
    const options = {
      hour12: false,
    };
    const localDate = new Date().toLocaleString('en-US', options);
    const currentDtTm = localDate.split(',');
    const date = currentDtTm[0].split('/');
    const time = currentDtTm[1].split(':');
    return new Date(Date.UTC(date[2], date[0] - 1, date[1], time[0], time[1], time[2]));
  },
};
