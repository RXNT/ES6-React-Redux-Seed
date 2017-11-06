import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.component.scss';

/**
 * Defines layout of Home Screen
 */
class HomeComponent extends Component {
  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    return (
      <div>
        <div className="row">
          <h1>Welcome, to home page</h1>
        </div>
        <div className="row">
          <h2>Navigate to various pages using links</h2>
        </div>
        <div className="row">
          <h3>Happy coding!!!!!</h3>
        </div>
        <h2>DEMOS</h2>
        <ul>
          <li>
            <h3>
              <Link to='/muiDemo'>Mui Demo</Link>
            </h3>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomeComponent;
