import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

/**
 * 
 */
class MuiButton extends Component {
  /**
   * 
   */
  render() {
    const { classes, input, meta, label, ...custom } = this.props;
    return (
      <Button raised color="primary" className = {classes.button} {...custom}>{label}</Button>
    );
  }
}

const styles = theme => ({
  button: {
    height: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

MuiButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(MuiButton);
