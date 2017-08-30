import React, { Component } from 'react';

const menuTopImg = require('../../../assets/images/memTop.gif');

/**
 * Defines layout of Version Mismatch Component
 */
class VersionMismatchComponent extends Component {
  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    return (
      <div>
        <img src={menuTopImg} className="versionMismatchImage" />
        <div className="redBorderTxt versionMismatchHeader">
          There is newer version of application available.
          Please reload application by refreshing browser or clear cache
        </div>
      </div>
    );
  }
}

export default VersionMismatchComponent;
