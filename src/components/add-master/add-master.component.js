import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues, isValid } from 'redux-form';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import * as addActions from './actions';
import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import './add-master.component.scss';
import * as types from './constants';
import MuiRaisedButton from '../ui-components/mui-raisedButton';

const errorImg = require('../../../assets/images/error.png');

const inputComponent = field =>
  <span>
    <input {...field.input}
      type={field.type}
      ref={field.ref}
      style={field.style}
      checked={field.checked}
      disabled={field.disabled}
      placeholder={field.placeholder}
      onChange={field.onChange ? field.onChange : field.input.onChange}
      value={field.prefillValue ? field.prefillValue : field.input.value}
      maxLength = {field.maxLength}
    />
    {field.isSubmitted && field.meta.error !== '' && field.meta.error !== undefined &&
    <span>
      <OverlayTrigger placement="top"
        overlay={<Tooltip id={field.meta.error}>{field.meta.error}</Tooltip>}>
        <img src={errorImg} />
      </OverlayTrigger>
    </span>}
  </span>;

/**
 * Defines layout of Add Master Screen
 */
class AddMasterComponent extends Component {
  /**
   * Attach component scope to all functions 
   * @constructor
   */
  constructor(props) {
    super(props);
    this.saveInfo = this.saveInfo.bind(this);
  }

  /**
   * Serires of actions will be executed before the initial render of component
   */
  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.actions.getById(this.props.match.params.id);
    }
  }

  /**
 * This function saves information to database
 * @param {object} e - Event Object
 */
  saveInfo(e) {
    e.preventDefault();
    this.props.actions.saveInfo(this.props.formValues)
      .then(() => {
        this.props.history.push('/Search');
      });
  }

  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    let errorMsgs = '';
    if (this.props.validationMessages !== null && this.props.validationMessages !== '' &&
         this.props.validationMessages !== undefined && this.props.validationMessages.length > 0) {
      errorMsgs = this.props.validationMessages.join(' ');
    }

    return (
      <div>
        <div className="table">
          <div className="row">
            <div className="col-md-4">
              <h4>Add Patients</h4>
            </div>
          </div>
        </div>
        <div className="table tab-content">
          {this.props.loading && <SpinnerComponent/>}
          {errorMsgs.length > 0 && <div className="row redBorderTxt wordWrap">{errorMsgs}</div>}
          <div className="row">
            <div className="col-md-1 col-sm-1 col-sx-1">
              First Name:
            </div>
            <div className="col-md-2 col-sm-2 col-sx-2">
              <Field type="text" name="name"
                isSubmitted={this.props.isSubmitted} component={inputComponent}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1 col-sm-1 col-sx-1">
              Email:
            </div>
            <div className="col-md-2 col-sm-2 col-sx-2">
              <Field type="text" name="email"
                isSubmitted={this.props.isSubmitted} component={inputComponent}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 tdTopAlign">
              <div className="pull-right mainHeaderButtons">
                <Link to="/search"><input type="button"
                  className="btnAllYellow pull-right" value="Cancel" /></Link>
                <MuiRaisedButton label="Save" onClick={this.saveInfo} primary={true}/>
                <input type="button" className="btnAllGreen pull-right"
                  value="Save" onClick={this.saveInfo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * This function validates form data
 * @param {object} values - form data entered by user
 */
function validate(values) {
  const errors = {};
  if (!values.name || values.name === '' || values.name === null) {
    errors.name = 'First Name is required.';
  }

  if (!values.email || values.email === '' || values.email === null || values.email === undefined) {
    errors.email = 'Email is required.';
  } else {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegEx.test(values.email)) {
      errors.email = 'Email is invalid.';
    }
  }

  return errors;
}

AddMasterComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  validationMessages: PropTypes.array,
  isSubmitted: PropTypes.bool,
  formValues: PropTypes.object,
  formValid: PropTypes.bool,
};

const mapStateToProps = store => (
  {
    data: store.addMasterReducer.data,
    loading: store.addMasterReducer.loading,
    isSubmitted: store.addMasterReducer.isSubmitted,
    formValid: isValid(types.COMPONENTS_ADD_MASTER_FORM)(store),
    formValues: getFormValues(types.COMPONENTS_ADD_MASTER_FORM)(store),
  }
);

/**
 * This function binds actions with component
 * @param {object} dispatch - Dispatcer
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addActions, dispatch),
  };
}

const AddMasterComponentForm = reduxForm({
  form: types.COMPONENTS_ADD_MASTER_FORM,
  validate,
  enableReinitialize: true,
})(AddMasterComponent);

const AddMasterComponentFormState = connect(
  state => ({
    initialValues: {
      name: state.addMasterReducer.data.name,
      email: state.addMasterReducer.data.email,
    },
  }),
)(AddMasterComponentForm);
const AddMasterComponentFormWithRouter = withRouter(AddMasterComponentFormState);
export default connect(mapStateToProps, mapDispatchToProps)(AddMasterComponentFormWithRouter);
