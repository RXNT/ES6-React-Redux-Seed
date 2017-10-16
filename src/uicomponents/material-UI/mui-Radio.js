import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Radio, RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';

/**
 * @args: [options]
 */
class MuiRadio extends Component {
  /**
   *
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
   */
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.input.onChange(event.target.value);
  }
  /**
   * 
   */
  render() {
    const { classes, options, style, input, meta, ...custom } = this.props;
    return (
      <RadioGroup
        className={classes.radio}
        {...input}
        value={this.state.value}
        onClick= {this.handleChange}
        {...custom}
      >
        {options.map(option => (
          <FormControlLabel key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    );
  }
}

const styles = {
  radio: {
    margin: 1,
  },
};

MuiRadio.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};

export default withStyles(styles)(MuiRadio);
