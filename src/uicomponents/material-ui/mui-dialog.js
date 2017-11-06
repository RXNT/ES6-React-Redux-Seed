/**
 * MuiDialog
 * Renders a Mui dialog after applying styles
 * 10/05/2017
 */

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
 * MuiDialog
 * @class
 * @augments
 * @param {string} buttonLabel - Button Label for the modal
 * @param {object} buttonProps - Props for the button with buttonLabel
 * @param {string} title - Title for the modal 
 * @param {*} content - The content/body of the modal
 * @param {string} actionButtonLabel - Label for action button (Yes, Submit, Save etc)
 * @param {function} action - The  action that gets executed after 
 * actionButtonLabel has been clicked
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class MuiDialog extends Component {
  /**
   * @constructor
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
   * @function handleOpen - Handles opening of the modal
   */
  handleOpen() {
    this.setState({ open: true });
  }

  /**
   * @function handleClose - Handles closing of the odal
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * @function render
   * Renders the MUI element into the DOM in the supplied container 
   */
  render() {
    const { classes, className,
      input, style, meta, buttonLabel, buttonsProps, title, content,
      actionButtonLabel, action, ...custom } = this.props;
    const combinedClassName = `${className} ${classes.dialog}`;
    return (
      <div>
        <Button raised color="accent" onClick={this.handleOpen} {...buttonsProps} className={classes.button} >{buttonLabel}</Button>
        <Dialog fullWidth open={this.state.open} onRequestClose={this.handleClose}
          style={style} className={combinedClassName} {...custom}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ () => {
              action();
              this.handleClose();
            }} color="primary">
              {actionButtonLabel}
            </Button>
            <Button onClick={this.handleClose} color="accent">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

/**
 * Default styles applied to the components
 * @param {*} theme 
 */
const styles = theme => ({
  dialog: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

/**
 * Typechecking on the props for MuiButton
 * classes 
 * buttonLabe;
 * title
 * content
 * actionButtonLabel
 * action
 */
MuiDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionButtonLabel: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

/**
 * @function withStyles - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} MuiDialog - Component where the styles are applied
 */
export default withStyles(styles)(MuiDialog);
