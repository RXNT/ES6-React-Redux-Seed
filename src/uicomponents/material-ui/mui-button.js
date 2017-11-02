/**
 * MuiButton
 * Renders a Mui button after applying styles
 * 10/03/2017
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

/**
 * MuiButton class
 * @class
 * @augments Component
 * @param {string} label - Button Label
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class MuiButton extends Component {
  /**
   * @function render
   * Renders a MUI element into the DOM in the supplied container 
   */
  render() {
    const { classes, className, style, input, meta, label, ...custom } = this.props;
    const combinedClassName = `${className} ${classes.button}`;
    return (
      <Button raised color="primary" className = {combinedClassName} style={style} {...custom}>{label}</Button>
    );
  }
}
/**
 * Default styles applied to the components
 * @param {*} theme 
 */
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

/**
 * Typechecking on the props for MuiButton
 * label
 * classes 
 */
MuiButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};
/**
 * @function withStyles - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} MuiButton - Component where the styles are applied
 */
export default withStyles(styles)(MuiButton);
