import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.marginLeft,
    marginRight: theme.spacing.marginRight,
    width: theme.spacing.width,
  },
});

/**
 * 
 */
class MuiTextField extends Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * 
   * @param {*} event 
   */
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  /**
   * 
   */
  render() {
    const { sheet, classes,
      input, style, meta: { touched, error }, ...custom } = this.props;
    return (
      <TextField
        className = {classes.textField}
        style={style}
        value={this.state.value}
        onChange={this.handleChange}
        error={touched && error}
        { ...input }
        { ...custom }
      />
    );
  }
}

MuiTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MuiTextField);
