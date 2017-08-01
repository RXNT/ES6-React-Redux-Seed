import React, { Component } from 'react';

const menuTopImg = require('../../../assets/images/memTop.gif');

class VersionMismatchComponent extends Component {
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
