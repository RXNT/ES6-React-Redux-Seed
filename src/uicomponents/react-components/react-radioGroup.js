/**
 * ReactRadioGroup
 * Renders a group of React radio buttons after applying react-jss styles
 * 09/15/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
/**
 * ReactRadioGroup
 * @class
 * @augments Component
 * @param {[]} options - An array of items that make the radio button group
 * @param {string} className - - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class ReactRadioGroup extends Component {
  /**
   * @constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  /**
   * @function handleChange - Handles the change when a radio button is clicked
   */
  handleOptionChange(event) {
    this.setState({ value: event.target.value });
    this.props.input.onChange(event.target.value);
  }
  /**
   * @function render 
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { options, classes, className, theme, sheet, input, style, meta, ...custom } = this.props;
    const combinedClassName = `${classes.input} ${className}`;
    return (
      <div>
        {options.map((option) =>(<div key={option}> <label><input type="radio" className = {combinedClassName} style = {style} checked= {this.state.value === option} onChange = {this.handleOptionChange} value={option} {...custom} />{option}</label> </div> //eslint-disable-line
        ))}
      </div>
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
 * Typechecking on the props for ReactRadioGroup
 * classes 
 * options
 */
ReactRadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};


/**
 * @function injectSheet - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} ReactRadioGroup - Component where the styles are applied
 */
export default injectSheet(styles)(ReactRadioGroup);
