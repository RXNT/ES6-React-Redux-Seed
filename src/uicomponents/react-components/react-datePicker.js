/**
 * ReactDatePicker
 * Renders a HTML input after applying react-jss styles
 * 09/15/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';

/**
 * ReactInput component which extends Component
 */
class ReactDatePicker extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, classes, input, style, meta, ...custom } = this.props;
    return (
      <input
        style = {style}
        className = {classes.input}
        type='date'
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
 * Export the UI Component after applying styles
 */
export default injectSheet(defaultStyles)(ReactDatePicker);
