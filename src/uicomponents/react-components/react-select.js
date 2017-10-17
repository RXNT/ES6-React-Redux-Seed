/**
 * ReactSelect
 * Renders a React Select component after applying react-jss styles
 * 09/22/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
/**
 * ReactSelect
 * @class
 * @augments Component
 * @param {[]} options - An array of items for select
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class ReactSelect extends Component {
  /**
   * @function render
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, options, classes, className, input, style, meta, ...custom } = this.props;
    const combinedClassName = `${classes.select} ${className}`;
    return (
      <select
        {...input}
        className= {combinedClassName}
        style= {style}
        {...custom}
      >
        <option value="">Select</option>
        {options.map((option) => <option key={option} value={option}>{option}</option> //eslint-disable-line
        )}
      </select>
    );
  }
}

/**
 * Default styles that are directly applied to the above component
 */
const defaultStyles = {
  select: {
    margin: 5,
  },
};

/**
 * Typechecking on the props for ReactButton
 * classes 
 * options
 */
ReactSelect.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

/**
 * @function injectSheet - Export the UI Component after applying styles
 * @param {object} defaultStyles - The default style applied to the component
 * @param {class} ReactSelect - Component where the styles are applied
 */
export default injectSheet(defaultStyles)(ReactSelect);
