import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import injectSheet from 'react-jss';

/**
 * MuiFlatButton component which extends Component
 */
const uiComponent = class MuiFlatButton extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, classes,
      input, style, meta, ...custom } = this.props;
    return (
      <FlatButton
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
