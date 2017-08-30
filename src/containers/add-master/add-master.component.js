import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import AddMasterComponent from '../../components/add-master/add-master.component';

/**
 * Defines layout of Add Master Page
 */
class AddMasterContainerComponent extends Component {
  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    return (
      <div>
        {this.props.loading && <SpinnerComponent/>}
        <section>
          <AddMasterComponent />
        </section>
      </div>
    );
  }
}

AddMasterContainerComponent.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = store => (
  {
    loading: store.applicationReducer.loading,
  }
);

export default connect(mapStateToProps)(AddMasterContainerComponent);
