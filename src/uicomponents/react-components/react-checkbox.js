/**
 * ReactCheckbox
 * Renders a React Checkbox after applying react-jss styles
 * 09/19/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
/**
 * ReactCheckbox Class
 * @class
 * @augments Component
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class ReactCheckbox extends Component {
  /**
   * @function render
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, classes, className, input, style, meta, ...custom } = this.props;
    const combinedClassName = `${classes.input} ${className}`;
    return (
      <input
        style = {style}
        className = {combinedClassName}
        type="checkbox"
        { ...input }
        { ...custom }
      />
    );
  }
}

/**
 * Default styles that are directly applied to the above component
 */
const defaultStyles = {
  input: {
    margin: 5,
  },
};

/**
 * Typechecking on the props for ReactButton
 * classes 
 */
ReactCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

/**
 * @function injectSheet - Export the UI Component after applying styles
 * @param {object} defaultStyles - The default style applied to the component
 * @param {class} ReactCheckbox - Component where the styles are applied
 */
export default injectSheet(defaultStyles)(ReactCheckbox);
