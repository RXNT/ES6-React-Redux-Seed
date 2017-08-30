import React, { Component, PropTypes } from 'react';
import { DateField, Calendar, Footer } from 'react-date-picker';
import './date-picker.component.scss';

/**
 * Defines DatePicker Component
 */
class DateInputComponent extends Component {
  /**
   * Prepare layout for component which will be rendered in browser
   */
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
