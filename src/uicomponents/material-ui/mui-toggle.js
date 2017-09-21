import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import injectSheet from 'react-jss';

/**
 * MuiToggle component which extends Component
 */
const uiComponent = class MuiToggle extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, classes,
      input, style, meta, ...custom } = this.props;
    return (
      <Toggle
        className = {classes.checkbox}
        style= {style}
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
  checkbox: {
    margin: 5,
  },
};

/**
 * Export the UI Component after applying styles
 */
export default injectSheet(defaultStyles)(uiComponent);
