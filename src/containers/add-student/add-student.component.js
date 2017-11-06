import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import AddStudentComponent from '../../components/add-student/add-student.component';

/**
 * Defines layout of Add Student Page
 */
class AddStudentContainerComponent extends Component {
  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    return (
      <div>
        {this.props.loading && <SpinnerComponent/>}
        <section>
          <AddStudentComponent />
        </section>
      </div>
    );
  }
}

AddStudentContainerComponent.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = store => (
  {
    loading: store.applicationReducer.loading,
  }
);

export default connect(mapStateToProps)(AddStudentContainerComponent);
