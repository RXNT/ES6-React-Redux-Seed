import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopNavComponent extends Component {
  constructor(props) {
    super(props);
    this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
  }

  toggleLeftMenu() {
    this.props.toggleLeftMenu();
  }

  render() {
    return (
      <div className="container">
        <button type="button" className="btn btn-navbar"
          data-toggle="collapse" data-target=".nav-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="#">
          <div className="brand"><span><h2>Home</h2></span></div>
        </a>
        <div className="nav-collapse collapse topmenu">
          <ul className="nav">

            <li className="ocolor prescription"><a href="#" tabIndex="-1">
              <div className="navcircle ng-binding">
                1
              </div>
              <span>Home</span> </a>
            </li>
            <li className="ocolor prescription"><a href="#/search" tabIndex="-1">
              <div className="navcircle ng-binding">
                1
              </div>
              <span>Menu1</span> </a>
            </li>
            <li className="ocolor prescription"><a href="#" tabIndex="-1">
              <div className="navcircle ng-binding">
                1
              </div>
              <span>Menu2</span> </a>
            </li>
            <li className="gcolor fright"><a href="#" target="_blank" tabIndex="-1">
              <div className="navcircle ng-binding">
                2
              </div>
              <span>Menu3</span></a>
            </li>
            <li className="g2color fright"><a href="#" tabIndex="-1">
              <div className="navcircle ng-binding">
                3
              </div>
              <span>Menu4</span></a>
            </li>
            <li className="rcolor fright"><a href="#" tabIndex="-1">
              <div className="navcircle ng-binding">
                4
              </div>
              <span>Menu5</span> </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

TopNavComponent.propTypes = {
  toggleLeftMenu: PropTypes.func,
};

export default TopNavComponent;
