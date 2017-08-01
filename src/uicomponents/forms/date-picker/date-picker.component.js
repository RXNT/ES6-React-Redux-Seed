import React, { Component, PropTypes } from 'react';
import { DateField, Calendar, Footer } from 'react-date-picker';
import './date-picker.component.scss';

class DateInputComponent extends Component {
  render() {
    const { field } = this.props;
    return (
      <DateField onChange={field.onChange}
        dateFormat="MM/DD/YYYY"
        collapseOnDateClick="true"
        updateOnDateClick="true">
        <Calendar >
          <Footer clearButton={false} />
        </Calendar>
      </DateField>
    );
  }
}

DateInputComponent.propTypes = {
  field: PropTypes.object.isRequired,
};

export default DateInputComponent;
