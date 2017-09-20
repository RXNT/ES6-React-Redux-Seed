/**
 * HtmInput
 * Renders a HTML input after applying react-jss styles
 * 09/15/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
/**
 * HtmInput component which extends Component
 */
const uiComponent = class HtmInput extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { type, placeholder, sheet, classes, input, style, meta, ...custom } = this.props;
    const className = `form-group ${meta.touched && meta.error ? 'has-error' : ''}`;
    console.log("Form input props", this.props);
    return (
      <div className = {className} >
        <input
          style = {style}
          className = {`${classes.input} form-control`}
          type={type}
          { ...input }
          { ...custom }
        />
        <div className= "text-danger">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
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
 * Export the UI Component after applying styles
 */
export default injectSheet(defaultStyles)(uiComponent);