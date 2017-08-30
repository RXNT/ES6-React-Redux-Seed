import React, { Component } from 'react';
import HomeComponent from '../../components/home/home.component';

/**
 * Defines layout of Home Page
 */
class HomeContainer extends Component {
  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    return (
      <HomeComponent />
    );
  }
}

export default HomeContainer;
