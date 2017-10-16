import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

/**
 * args: label, options
 */
class MuiSelect extends Component {
  /**
   * constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = { value: this.props.options[0] };
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * handle change in the state of dropdown
   * @param {*} event 
   * @param {*} index 
   * @param {*} value 
   */
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.input.onChange(event.target.value);
  }

  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { classes, label, options, input, meta, ...custom } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor= {`${label}`}>{label}</InputLabel>
        <Select
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

MuiSelect.PropTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default withStyles(styles)(MuiSelect);
