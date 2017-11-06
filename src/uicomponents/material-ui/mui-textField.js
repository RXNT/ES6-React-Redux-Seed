/**
 * MuiTextField
 * Renders a Mui TextField after applying styles
 * 10/08/2017
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

/**
 * Default styles applied to the components
 * @param {*} theme 
 */
const styles = theme => ({
  textField: {
    margin: theme.spacing.unit + 20,
    width: theme.spacing.width,
  },
});

/**
 * MuiTextField class
 * @class
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class MuiTextField extends Component {
  /**
   * @constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * @function handlechange - handle onChange in text field
   * @param {*} event 
   */
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  /**
   * @function render
   * Renders a MUI element into the DOM in the supplied container 
   */
  render() {
    const { sheet, classes, className,
      input, style, meta: { touched, error }, ...custom } = this.props;
    const combinedClassName = `${className} ${classes.textField}`;
    return (
      <TextField
        className = {combinedClassName}
        style={style}
        value={this.state.value}
        onChange={this.handleChange}
        error={touched && error ? true : false } //eslint-disable-line
        { ...input }
        { ...custom }
      />
    );
  }
}

/**
 * Typechecking on the props for MuiButton
 * classes 
 */
MuiTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

/**
 * @function withStyles - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} MuiTextField - Component where the styles are applied
 */
export default withStyles(styles)(MuiTextField);
