import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import injectSheet from 'react-jss';

/**
 * MuiTextField component which extends Component
 */
const uiComponent = class MuiTextField extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, classes,
      input, style, meta: { touched, error }, ...custom } = this.props;
    return (
      <TextField
        className = {classes.input}
        style= {style}
        errorText= { touched ? error : '' }
        { ...input }
        { ...custom }
      />
    );
  }
};
/**
 * Default styles that are applied to the above component
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
