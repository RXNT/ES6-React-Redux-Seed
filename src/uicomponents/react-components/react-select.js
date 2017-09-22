/**
 * HtmSelect
 * Renders a HTML Checkbox after applying react-jss styles
 * 09/15/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
/**
 * HtmSelect component which extends Component
 */
const uiComponent = class HtmSelect extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, options, classes, input, style, meta, ...custom } = this.props;
    return (
      <select
        {...input}
        className= {classes.input}
        style= {style}
        {...custom}
      >
        <option value="">Select</option>
        {options.map((option) => <option key={option} value={option}>{option}</option> //eslint-disable-line
        )}
      </select>
    );
  }
};

/**
 * Default styles that are directly applied to the above component
 */
const defaultStyles = {
  input: {
    margin: 5,
  },
};

/**
 * Exports the UI Component after applying styles
 */
export default injectSheet(defaultStyles)(uiComponent);
