import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues, isValid } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import _ from 'lodash';

import * as addActions from './actions';
import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import './add-master.component.scss';
import * as types from './constants';
import ReactTextField from '../../uicomponents/react-components/react-input';
import MuiTextField from '../../uicomponents/material-ui/mui-textField';
import ReactButton from '../../uicomponents/react-components/react-button';
import MuiDropdown from '../../uicomponents/material-ui/mui-dropDownMenu';
import ReactDropdown from '../../uicomponents/react-components/react-select';

/**
 * Defines layout of Add Master Screen
 */
class AddMasterComponent extends Component {
  /**
   * Serires of actions will be executed before the initial render of component
   */
  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.actions.getById(this.props.match.params.id);
    } else {
      this.props.actions.reset();
    }
  }

  /**
 * This function saves information to database
 * @param {object} e - Event Object
 */
  onSubmit(values) {
    this.props.actions.saveInfo(values).then(() => {
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
    const options = ['Apple', 'Tiger', 'Zebra', 'Dinosaur'];
    const { handleSubmit } = this.props;
    return (
      <form onSubmit= {handleSubmit(this.onSubmit.bind(this))}>
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
                  component={ReactTextField}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1 col-sm-1 col-sx-1">
                Email:
              </div>
              <div className="col-md-2 col-sm-2 col-sx-2">
                <Field type="text" name="email"
                  component={MuiTextField}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-1 col-sm-1 col-sx-1">
                Select React:
              </div>
              <div className="col-md-2 col-sm-2 col-sx-2">
                <Field name="reactDropDown" options={options}
                  component={ReactDropdown}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-1 col-sm-1 col-sx-1">
                Select MUI:
              </div>
              <div className="col-md-2 col-sm-2 col-sx-2">
                <Field
                  name="MuiDropdown"
                  component={MuiDropdown}
                  options={options}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 tdTopAlign">
                <div className="pull-right mainHeaderButtons">
                  <Link to="/search"><ReactButton
                    className="btnAllYellow pull-right" label="Cancel" style={{ height: 50, width: 100 }} /></Link>
                  <ReactButton className= "btnAllGreen" type='submit' label='Submit' style={{ height: 50, width: 100 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

/**
 * This function validates form data
 * @param {object} values - form data entered by user
 */
const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'name',
    'email',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = `${_.capitalize(field)} is required`;
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

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
