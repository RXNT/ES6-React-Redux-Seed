import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * @args: buttonLabel, modalTitle, modalBody, action, actionButtonLabel
 */
class ReactDialog extends Component {
  /**
   * 
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
   * 
   * @param {*} modalState 
   */
  setModal(modalState) {
    this.setState({ showModal: modalState });
  }

  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { classes, sheet, input, style, meta, buttonLabel, modalTitle, modalBody, action,
      actionButtonLabel, ...custom } = this.props;
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
          className = {classes.modal} {...custom} >
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


const defaultStyles = {
  modal: {
    margin: 'auto', marginTop: '5%',
  },
};

ReactDialog.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalBody: PropTypes.any.isRequired,
  action: PropTypes.func.isRequired,
  actionButtonLabel: PropTypes.string.isRequired,
};

export default injectSheet(defaultStyles)(ReactDialog);
