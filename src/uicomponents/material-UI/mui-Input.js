import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

/**
 * 
 */
class MuiInput extends Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * 
   * @param {*} event 
   */
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  /**
   * 
   */
  render() {
    const { label, classes, input, meta, ...custom } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="input">{label}</InputLabel>
        <Input id="input" value={this.state.name} onChange={this.handleChange} {...custom} />
      </FormControl>
    );
  }
}

MuiInput.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(MuiInput);
