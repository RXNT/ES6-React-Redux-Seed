/**
 * HtmButton
 * Renders a HTML button after applying react-jss styles
 * 09/15/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
/**
 * Htmbutton component which extends Component
 */
const uiComponent = class HtmButton extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { classes, children, label, sheet, style, glyphiconClass, ...custom } = this.props;
    return (
      <div
        className={classes.button}
        style={style}
        {...custom}
      >
        {glyphiconClass !== '' && <i className={`${glyphiconClass} glyphicon glyPhiconYellow buttonTabIcon`}></i>}
        <input type="button" className="buttonTabText pull-right" value={label} />

      </div>
    );
  }
};
/**
 * Default styles that are directly applied to the above component
 */
const defaultStyles = {
  button: {
    margin: 15,
    height: 40,
    width: 70,
    backgroundColor: 'red',
  },
};

/**
 * Export the UI Component after applying styles
 */
export default injectSheet(defaultStyles)(uiComponent);
