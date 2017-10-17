
/**
* ReactDialog
* Renders a React Dialog
* 09/24/2017
*/
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
/**
 * ReactDialog class
 * @augments Component
 * @param {string} buttonLabel - Button Label for the modal
 * @param {string} modalTitle - Title for the modal 
 * @param {*} modalBody - The content/body of the modal
 * @param {string} actionButtonLabel - Label for action button (Yes, Submit, Save etc)
 * @param {function} action - The  action that gets executed after 
 * actionButtonLabel has been clicked
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class ReactDialog extends Component {
  /**
   * @constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
    this.state = {
      showModal: false,
    };
  }

  /**
   * @function setModal - Function to change the modal State
   * @param {*} modalState 
   */
  setModal(modalState) {
    this.setState({ showModal: modalState });
  }

  /**
   * @function render
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { classes, className, sheet, input, style, meta, buttonLabel,
      modalTitle, modalBody, action,
      actionButtonLabel, ...custom } = this.props;
    const combinedClassName = `${classes.modal} ${className}`;
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setModal(true)}
        >
          {buttonLabel}
        </Button>

        <Modal show={this.state.showModal} onHide={ () => this.setModal(false)}
          className = {combinedClassName} {...custom} >
          <Modal.Header closeButton>
            <Modal.Title>
              {modalTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalBody}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => this.setModal(false) }>Close</Button>
            <Button onClick={ () => action() }>{actionButtonLabel}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

/**
 * Default styles that are applied to the above component
 */
const defaultStyles = {
  modal: {
    margin: 'auto', marginTop: '5%',
  },
};

/**
 * Typechecking on the props for ReactButton
 * buttonLabel
 * modalTitle
 * modalBody
 * actionLabelButton
 * action
 */
ReactDialog.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalBody: PropTypes.any.isRequired,
  action: PropTypes.func.isRequired,
  actionButtonLabel: PropTypes.string.isRequired,
};
/**
 * @function injectSheet - Export the UI Component after applying styles
 * @param {object} defaultStyles - The default style applied to the component
 * @param {class} ReactDialog - Component where the styles are applied
 */
export default injectSheet(defaultStyles)(ReactDialog);
