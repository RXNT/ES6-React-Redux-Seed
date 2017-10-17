/**
 * ReactInput
 * Renders a React input after applying react-jss styles
 * 09/12/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
/**
 * ReactInput class
 * @class
 * @augments Component
 * @param {string} className - Bootstrap className
 * @param {object} style - inline style for the component
 */
class ReactInput extends Component {
  /**
   * @function render
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, classes, className, input, style, meta, ...custom } = this.props;
    const divClassName = `form-group ${meta.touched && meta.error ? 'has-error' : ''}`;
    const combinedClassName = `${classes.input} ${className}`;
    return (
      <div className = {divClassName} >
        <input
          style = {style}
          className = {`${combinedClassName} form-control`}
          type="text"
          { ...input }
          { ...custom }
        />
        <div className= "text-danger" style={{ marginLeft: 5 }}>
          {meta.touched ? meta.error : ''}
        </div>
      </div>
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
ReactInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

/**
 * @function injectSheet - Export the UI Component after applying styles
 * @param {object} defaultStyles - The default style applied to the component
 * @param {class} ReactInput - Component where the styles are applied
 */
export default injectSheet(defaultStyles)(ReactInput);
