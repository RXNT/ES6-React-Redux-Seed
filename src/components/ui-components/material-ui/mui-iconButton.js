import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import injectSheet from 'react-jss';

/**
 * MuiIconButton component which extends Component
 */
const uiComponent = class MuiIconButton extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, classes,
      input, style, meta, ...custom } = this.props;
    return (
      <IconButton
        className = {classes.button}
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
  button: {
    margin: 5,
  },
};

/**
 * Export the UI Component after applying styles
 */
export default injectSheet(defaultStyles)(uiComponent);