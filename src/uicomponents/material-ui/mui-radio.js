/**
 * MuiRadio
 * Renders MuiRadio after applying styles
 * 10/04/2017
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';

/**
 * MuiRadio
 * @class
 * @augments Component
 * @param {[]} options - An Array Containing list of items to be shown
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class MuiRadio extends Component {
  /**
  * @constructor
  * @param {*} props 
  */
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.options[1],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * @function handleChange - Handles changes in the checkboxes
   * @param {*} event 
   */
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.input.onChange(event.target.value);
  }
  /**
  * @function render
  * Renders a MUI element into the DOM in the supplied container 
  */
  render() {
    const { classes, className, options, style, input, meta, ...custom } = this.props;
    const combinedClassName = `${classes.checkBox}`;
    return (
      <div>
        {options.map(option => (
          <FormControlLabel key={option} classes= {{ label: classes.label }}
            control={
              <Radio
                checked = {this.state.value === option}
                onClick= {this.handleChange}
                className={combinedClassName}
                {...input}
                value={option}
                style={style}
                {...custom}
              />
            }
            label={option}
          />
        ))}
      </div>
    );
  }
}

/**
 * Default styles applied to the components
 * @param {*} theme 
 */
const styles = theme => ({
  label: {
    fontSize: 16,
  },
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
MuiRadio.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};

/**
 * @function withStyles - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} MuiRadio - Component where the styles are applied
 */
export default withStyles(styles)(MuiRadio);
