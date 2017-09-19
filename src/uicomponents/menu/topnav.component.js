import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Defines layout of Top Navigation Bar
 */
class TopNavComponent extends Component {
  /**
   * Attach component scope to all functions 
   * @constructor
   */
  constructor(props) {
    super(props);
    this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
  }

  /**
   * This function triggers left menu
   */
  toggleLeftMenu() {
    this.props.toggleLeftMenu();
  }

  /**
   * Prepare layout for component which will be rendered in browser
   */
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

            <li className="ocolor prescription"><Link to="/search" tabIndex="-1">
              <div className="navcircle ng-binding">
                1
              </div>
              <span>Masters</span></Link>
            </li>
            <li className="ocolor prescription"><Link to="/" tabIndex="-1">
              <div className="navcircle ng-binding">
                1
              </div>
              <span>Menu2</span> </Link>
            </li>
            <li className="ocolor prescription"><Link to="/" tabIndex="-1">
              <div className="navcircle ng-binding">
                1
              </div>
              <span>Menu3</span> </Link>
            </li>
            <li className="gcolor fright"><Link to="/" target="_blank" tabIndex="-1">
              <div className="navcircle ng-binding">
                2
              </div>
              <span>Menu4</span></Link>
            </li>
            <li className="g2color fright"><Link to="/" tabIndex="-1">
              <div className="navcircle ng-binding">
                3
              </div>
              <span>Menu5</span></Link>
            </li>
            <li className="rcolor fright"><Link to="/" tabIndex="-1">
              <div className="navcircle ng-binding">
                4
              </div>
              <span>Menu6</span> </Link>
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
