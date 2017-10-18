/**
 * MuiInput
 * Renders a Mui Input after applying styles
 * 10/04/2017
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

/**
 * Default styles applied to the components
 * @param {*} theme 
 */
const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

/**
 * MuiInput class
 * @class
 * @param {string} label - Label for Input
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class MuiInput extends Component {
  /**
   * @constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * @function handleChange - Handles onChange for input
   * @param {*} event 
   */
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  /**
   * @function render
   * Renders a MUI element into the DOM in the supplied container 
   */
  render() {
    const { label, classes, className, input, meta, ...custom } = this.props;
    const combinedClassName = `${className} ${classes.formControl}`;
    return (
      <FormControl className={combinedClassName}>
        <InputLabel htmlFor="input">{label}</InputLabel>
        <Input id="input" value={this.state.name} onChange={this.handleChange} {...custom} />
      </FormControl>
    );
  }
}
/**
 * Typechecking on the props for MuiButton
 * label
 * classes 
 */
MuiInput.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};
/**
 * @function withStyles - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} MuiInput - Component where the styles are applied
 */
export default withStyles(styles)(MuiInput);
