import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class DateFormatterComponent extends Component {
  render() {
    let timeZone = this.props.timeZone;
    let newDate = '';
    if (timeZone !== null && timeZone !== '' && timeZone !== undefined) {
      timeZone = ` ${timeZone}`;
    } else {
      timeZone = '';
    }
    if (this.props.value !== null && this.props.value !== '' && this.props.value !== undefined) {
      newDate = moment.utc(this.props.value).format(this.props.format);
    }

    return (
      <div>
        {newDate + timeZone}
      </div>
    );
  }
}

DateFormatterComponent.propTypes = {
  value: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  timeZone: PropTypes.string,
};

export default DateFormatterComponent;
