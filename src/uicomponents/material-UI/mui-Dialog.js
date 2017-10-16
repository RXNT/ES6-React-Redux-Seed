import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
/**
 * args: buttonLabel, title, content, actionLabelOne, actionLabelTwo, action
 */
class MuiDialog extends Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  /**
   * 
   */
  handleOpen() {
    this.setState({ open: true });
  }

  /**
   * 
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * 
   */
  render() {
    const { classes,
      input, style, meta, buttonLabel, buttonsProps, title, content,
      actionLabelOne, actionLabelTwo, action, ...custom } = this.props;
    return (
      <div>
        <Button raised color="accent" onClick={this.handleOpen}>{buttonLabel}</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleClose} style={style} {...custom}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ () => action()} color="primary">
              {actionLabelOne}
            </Button>
            <Button onClick={this.handleClose} color="accent">
              {actionLabelTwo}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const styles = theme => ({
  dialog: {
    margin: theme.spacing.unit,
  },
});

MuiDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionLabelOne: PropTypes.string.isRequired,
  actionLabelTwo: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default withStyles(styles)(MuiDialog);
