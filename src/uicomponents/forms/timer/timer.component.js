import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timerActions from './actions';

/**
 * Defines layout of Timer
 */
class TimerComponent extends Component {
  /**
   * Attach component scope to all functions 
   * @constructor
   */
  constructor(props) {
    super(props);
    this.setTime = this.setTime.bind(this);
  }

  /**
   * Serires of actions will be executed before the initial render of component
   */
  componentWillMount() {
    this.setTime();
  }

  /**
   * Serires of actions will be executed once component mounted
   */
  componentDidMount() {
    setInterval(() => {
      this.setTime();
    }, 1000);
  }

  /**
   * Starts timer
   */
  setTime() {
    const currentdate = new Date();
    let currentHours = currentdate.getHours();

    if (currentHours >= 24) {
      currentHours -= 24;
    }

    if (currentHours < 0) {
      currentHours += 12;
    }

    currentHours = `${currentHours}`;

    if (currentHours.length === 1) {
      currentHours = `0${currentHours}`;
    }

    let currentMinutes = currentdate.getMinutes();
    currentMinutes = `${currentMinutes}`;

    if (currentMinutes.length === 1) {
      currentMinutes = `0${currentMinutes}`;
    }

    const time = {
      hours: currentHours,
      minutes: currentMinutes,
    };

    this.props.actions.updateTimer(time);
  }

  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    return (
      <div className="timer">
        <span className="city-time"><b>{this.props.hours}:{this.props.minutes}</b></span>
      </div>
    );
  }
}

TimerComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  hours: PropTypes.string,
  minutes: PropTypes.string,
  UTCOffset: PropTypes.string,
};

const mapStateToProps = store => (
  {
    hours: store.timerReducer.hours,
    minutes: store.timerReducer.minutes,
  }
);

/**
 * This function binds actions with component
 * @param {object} dispatch - Dispatcer
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(timerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerComponent);
