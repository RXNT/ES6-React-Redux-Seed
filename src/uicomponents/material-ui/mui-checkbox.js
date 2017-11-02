/**
 * MuiCheckbox
 * Renders MuiCheckboxes after applying styles
 * 10/04/2017
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';

/**
 * MuiCheckBox
 * @class
 * @augments Component
 * @param {string} label - The label for the checkbox
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 * @returns true or undefined based in the user selection
 */
class MuiCheckbox extends Component {
  /**
  * @function render
  * Renders a MUI element into the DOM in the supplied container 
  * @TODO: Passing {...input} will override the input in props to boolean. Check
  */
  render() {
    const { classes, className, label, style, input, meta, ...custom } = this.props;
    const combinedClassName = `${classes.checkBox}`;
    return (
      <FormControlLabel
        control={
          <Checkbox
            className={combinedClassName}
            style={style}
            {...custom}
            {...input}
            value={label}
          />
        }
        label={label}
      />
    );
  }
}

/**
 * Default styles applied to the components
 * @param {*} theme 
 */
const styles = theme => ({
  checkBox: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
});

/**
 * Typechecking on the props for MuiButton
 * label
 * classes 
 */
MuiCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * @function withStyles - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} MuiCheckbox - Component where the styles are applied
 */
export default withStyles(styles)(MuiCheckbox);
