import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default HomeComponent;
