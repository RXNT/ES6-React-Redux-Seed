import MobileDetect from 'mobile-detect';
import React from 'react';

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
  /**
   * renderPaginationPanel
   */
  renderPaginationPanel(props) {
    return (
      <div className='row'>
        <div className='col-md-6 col-sm-6 col-xs-6'>
          <div className='pull-left'>
            <button className={props.currPage === 1 ? 'disabledPageButton pageingPanel' : 'pageingPanel'}
              disabled={props.currPage === 1} onClick={() => props.changePage(1)}>
              <i className='glyphicon glyphicon-step-backward' />
            </button>
            <button className={props.currPage === 1 ? 'disabledPageButton pageingPanel' : 'pageingPanel'}
              disabled={props.currPage === 1}
              onClick={() => props.changePage(props.currPage - 1)}>
              <i className='glyphicon glyphicon-triangle-left' />
            </button>
            <input type='number'
              style={ { maxWidth: '40px' } }
              className='pageingPanel'
              value={props.currPage} min="1" max={props.totalPages}
              onChange={e => props.changePage(e.target.value)} />
            <span className='pageingPanel'> / { props.totalPages }</span>
            <button className={props.currPage === props.totalPages ? 'disabledPageButton pageingPanel' : 'pageingPanel'}
              disabled={props.currPage === props.totalPages}
              onClick={() => props.changePage(props.currPage + 1)}>
              <i className='glyphicon glyphicon-triangle-right pageingPanel' />
            </button>
            <button className={props.currPage === props.totalPages ? 'disabledPageButton pageingPanel' : 'pageingPanel'}
              disabled={props.currPage === props.totalPages}
              onClick={() => props.changePage(props.totalPages)}>
              <i className='glyphicon glyphicon-step-forward' />
            </button>
          </div>
          <div className='pull-left pageingPanel'>
            { props.components.sizePerPageDropdown }
            <span className='pageingPanel'> items per page</span>
          </div>
        </div>
      </div>
    );
  },
};
