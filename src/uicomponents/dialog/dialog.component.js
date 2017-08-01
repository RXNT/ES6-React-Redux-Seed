import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import './dialog.component.scss';

class DialogComponent extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  toggle() {
    return this.props.show;
  }

  close() {
    this.props.closeCallback();
  }

  onConfirm() {
    this.props.onConfirm();
  }

  render() {
    return (
      <div className="table">
        <div className="row">
          <Modal dialogClassName ="bmodal dialog" show={this.toggle} onHide={this.close}>
            <Modal.Body className ="modalBody">
              <div className="table modalPadding">
                <div className="row">
                  <button type= "button" className ="close"
                    onClick = {this.close} > &times;</button>
                  <h3>{this.props.title}</h3>
                </div>
                <div className="row">
                  {this.props.body}
                </div>
                <div className="row">
                  <input type ="button" className ="btnSearch"
                    onClick={this.onConfirm} value={this.props.confirmText} />
                  {!this.props.hideCancel ? <input type ="button" value={this.props.cancelText}
                    className ="btnCancel" onClick={this.close} /> : null}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

DialogComponent.propTypes = {
  body: React.PropTypes.node.isRequired,
  buttonText: React.PropTypes.node,
  cancelText: React.PropTypes.node,
  confirmBSStyle: React.PropTypes.string,
  confirmText: React.PropTypes.node,
  onConfirm: React.PropTypes.func,
  title: React.PropTypes.node.isRequired,
  visible: React.PropTypes.bool,
  closeCallback: PropTypes.func,
  hideCancel: PropTypes.bool,
  show: PropTypes.bool,
};

DialogComponent.defaultProps = {
  cancelText: 'Cancel',
  confirmText: 'Ok',
  confirmBSStyle: 'danger',
};

export default DialogComponent;
