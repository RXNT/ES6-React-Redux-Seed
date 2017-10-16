/**
 * ReactRadio
 * Renders a HTML Checkbox after applying react-jss styles
 * 09/15/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';

/**
 * ReactRadio component which extends Component
 */
class ReactRadio extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, classes, input, style, meta, ...custom } = this.props;
    return (
      <input
        style = {style}
        className = {classes.input}
        type="radio"
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
export default injectSheet(defaultStyles)(ReactRadio);
