/**
 * ReactRadio
 * Renders a ReactRadio after applying react-jss styles
 * 09/15/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

/**
 * ReactRadio class
 * @class
 * @augments Component
 * @param {string} className - Bootstrap className
 * @param {object} style - style that is applied to the component
 */
class ReactRadio extends Component {
  /**
   * @constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  /**
   * @function handleOptionChange - Handle onClick on the input
   * @param {*} value 
   */
  handleOptionChange(value) {
    this.setState({ value });
    this.props.input.onChange(value);
  }
  /**
   * @function render
   * Renders a React element into the DOM in the supplied container 
   * only inline styling works
   */
  render() {
    const { label, sheet, classes, className, theme, input, style, meta, ...custom } = this.props;
    const combinedClassName = `${classes.input} ${className}`;
    return (
      <input
        className={combinedClassName}
        checked= {this.state.value === label}
        value={label}
        onClick = {() => this.handleOptionChange(label)}
        style = {style}
        type="radio"
        { ...custom }
        { ...input }
      />

    );
  }
}

/**
 * Default styles that are directly applied to the above component
 */
const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
  },
});

/**
 * Typechecking on the props for ReactRadio
 * classes 
 */
ReactRadio.propTypes = {
  classes: PropTypes.object.isRequired,
};

/**
 * @function injectSheet - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} ReactRadio - Component where the styles are applied
 */
export default injectSheet(styles)(ReactRadio);
