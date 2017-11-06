import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import SearchStudentComponent from '../../components/search-student/search-student.component';

/**
 * Defines layout of Search Master Student Page
 */
class SearchStudentContainerComponent extends Component {
  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    return (
      <div>
        {this.props.loading && <SpinnerComponent/>}
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 tdTopAlign">
            <Link to="/students/new">
              <div className="pull-right mainHeaderButtons">
                <input type="button" className="btnSearch pull-right" value="New" />
                <span className="glyphicon glyphicon-plus glyPhiconPlusColor pull-right"></span>
              </div>
            </Link>
          </div>
        </div>
        <section>
          <SearchStudentComponent />
        </section>
      </div>
    );
  }
}

SearchStudentContainerComponent.propTypes = {
  loading: PropTypes.bool,
};

SearchStudentContainerComponent.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = store => (
  {
    loading: store.applicationReducer.loading,
  }
);

export default connect(mapStateToProps)(SearchStudentContainerComponent);
