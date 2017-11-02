/**
 * MuiSelect
 * Renders a Mui Select after applying styles
 * 10/05/2017
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

/**
 * MuiSelect
 * @class
 * @augments Component
 * @param {[]} options - An Array Containing list of items
 * @param {string} label - The label for the select
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class MuiSelect extends Component {
  /**
   * @constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = { value: this.props.options[0] };
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * @function handleChange - handle change in the state of dropdown
   * @param {*} event 
   * @param {*} index 
   * @param {*} value 
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
    const { classes, className, style, label, options, input, meta, ...custom } = this.props;
    const combinedClassName = `${className} ${classes.select}`;
    return (
      <FormControl>
        <InputLabel htmlFor= {`${label}`}>{label}</InputLabel>
        <Select
          className={combinedClassName}
          style={style}
          {...input}
          value={this.state.value}
          onChange={this.handleChange}
          {...custom}
        >
          {options.map((menu, index) =>
            <MenuItem key={index} value={menu}>{menu} </MenuItem>,
          )}
        </Select>
      </FormControl>
    );
  }
}

/**
 * Default styles applied to the components
 * @param {*} theme 
 */
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  select: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

/**
 * Typechecking on the props for MuiButton
 * label
 * classes 
 * options
 */
MuiSelect.PropTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

/**
 * @function withStyles - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} MuiSelect - Component where the styles are applied
 */
export default withStyles(styles)(MuiSelect);
