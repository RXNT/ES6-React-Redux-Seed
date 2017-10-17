/**
 * ReactButton
 * Renders a React button after applying react-jss styles
 * 09/15/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
/**
 * ReactButton Class
 * @class
 * @augments Component
 * @param {string} label - Label for the button
 * @param {string} className - Bootstrap className
 * @param {string} type - The type of input
 * @param {object} style - Custom style to be applied
 * @param {string} glyphiconClass - glyphiconClass value
 * @param {string} glyphiconColor - glyphiconColor value
 * @param {object} style - The style to be applied to the component
 */
class ReactButton extends Component {
  /**
   * @function render
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
<<<<<<< HEAD
    const { type = 'button', classes, className, label, sheet, style,
      glyphiconClass = '', glyphiconColor = 'glyphiconBlue', ...custom } = this.props;
    const combinedClassName = `${classes.button} ${className}`;
=======
    const { type = 'submit', classes, children, label, sheet, style, glyphiconClass, glyPhiconColor, ...custom } = this.props;
>>>>>>> 8f3075953ac98ce2d9eb1cb105f157fe98146f33
    return (
      <div
        className={combinedClassName}
        style={style}
      >
<<<<<<< HEAD
        {glyphiconClass !== '' && <i className={`${glyphiconClass} glyphicon ${glyphiconColor} buttonTabIcon`}></i>}
        <input type={type} className="buttonTabText pull-right" value={label} {...custom} />
=======
        {glyphiconClass !== '' && <i className={`${glyphiconClass} glyphicon ${glyPhiconColor} buttonTabIcon`}></i>}
        <input type={type} className="buttonTabText pull-right" value={label} />

>>>>>>> 8f3075953ac98ce2d9eb1cb105f157fe98146f33
      </div>
    );
  }
}
/**
 * Default styles that are directly applied to the above component
 */
const defaultStyles = {
  button: {
    margin: 5,
  },
};
/**
 * Typechecking on the props for ReactButton
 * label
 * classes 
 */
ReactButton.propTypes = {
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

/**
 * @function injectSheet - Export the UI Component after applying styles
 * @param {object} defaultStyles - The default style applied to the component
 * @param {class} ReactButton - Component where the styles are applied
 */
export default injectSheet(defaultStyles)(ReactButton);
