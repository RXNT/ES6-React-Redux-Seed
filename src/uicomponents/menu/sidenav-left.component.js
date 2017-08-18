import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SideNavLeftComponent extends Component {
  render() {
    return (
      <div className="popoutmenu leftpopmenu">
        <a className="poplefthome" href="#">RxNT Home</a>
        <ul>
          <li className="menu1">
            <span className="glyphicon glyphicon-home"></span>
            <a href="#/search">Menu 1</a>
          </li>
          <li className="menu2">
            <span className="glyphicon glyphicon-usd"></span>
            <a href="#">Menu 2</a>
          </li>
        </ul>
      </div>
    );
  }
}

SideNavLeftComponent.propTypes = {
  pmUrl: PropTypes.string,
  schedulerUrl: PropTypes.string,
};

const mapStateToProps = store => (
  {
    pmUrl: store.auth.pmUrl,
    schedulerUrl: store.auth.schedulerUrl,
  }
);

export default connect(mapStateToProps)(SideNavLeftComponent);
