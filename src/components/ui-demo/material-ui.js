import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Divider from 'material-ui/Divider';

import Checkbox from '../../uicomponents/material-ui/mui-checkbox';
import CheckboxGroup from '../../uicomponents/material-ui/mui-checkboxGroup';
import DatePicker from '../../uicomponents/material-ui/mui-datePicker';
import Dialog from '../../uicomponents/material-ui/mui-dialog';
import Radio from '../../uicomponents/material-ui/mui-radio';
import Select from '../../uicomponents/material-ui/mui-select';
import TextField from '../../uicomponents/material-ui/mui-textField';

/**
 * 
 */
class MUIDemo extends Component {
  /**
   * 
   * @param {*} values 
   */
  onSubmit(values) {
    //  handle sending the values to the server
    console.log('form values: ', values); // eslint-disable-line
  }
  /**
   * 
   */
  render() {
    const { handleSubmit } = this.props;
    return (
      <form>
        <div style={{ height: '100vh', padding: 20, background: 'white', margin: 'auto' }}>
          <Divider />
          InputOne:
          <Field
            name='input1'
            component={TextField}
          />
          <Divider />
          <Field
            name='singlecheckBox'
            label= "Hungry??"
            component = {Checkbox}
          />
          <Divider />
          Countries in Europe:
          <Field
            name='checkboxgroup'
            options= {['USA', 'Canada', 'Spain', 'Norway']}
            component = {CheckboxGroup}
          />
          <Divider />
          Enter DOB:
          <Field
            name="datepicker"
            component = {DatePicker}
          />
          <Divider />
          Country in Europe Radio:
          <Field
            name='radio'
            options= {['USA', 'Canada', 'Spain', 'Japan']}
            component = {Radio}
          />
          <Divider />
          Country in Europe Select:
          <Field
            name='select'
            options= {['USA', 'Canada', 'Spain', 'Japan']}
            component = {Select}
          />
          <Divider />
          <Dialog buttonLabel= "submit" title="Confirm" content= "Do you want to submit?" actionButtonLabel= "Submit" action={handleSubmit(this.onSubmit.bind(this))} />
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'input1',
    'singlecheckbox',
    'checkboxgroup',
    'datepicker',
    'radio',
    'select',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default reduxForm({
  form: 'mui-form',
  validate,
})(MUIDemo);
