import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import * as samplePage1Actions from './actions';
import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import * as appUtils from '../../utils/app-utils';
import './search-master.component.scss';

/**
 * Defines layout of Search Master Screen
 */
class SearchMasterComponent extends Component {
  /**
   * Attach component scope to all functions 
   * @constructor
   */
  constructor(props) {
    super(props);
    this.idFormatter = this.idFormatter.bind(this);
  }

  /**
   * Serires of actions will be executed before the initial render of component
   */
  componentWillMount() {
    const compScope = this;
    this.props.actions.startSpinner();
    Promise.all([
      compScope.props.actions.load(),
    ]).then(() => {
      compScope.props.actions.stopSpinner();
    });
  }

  /**
 * This function renders link tag
 * @param {object} cell - data grid cell information
 * @param {object} row - data grid row information
 */
  idFormatter(cell, row) { // eslint-disable-line no-unused-vars
    return (
      <Link to={`/master/${cell}`}>{cell}</Link>
    );
  }

  /**
 * This function enable/disable whether to expand or collapse
 * @param {object} row - data grid row information
 */
  isExpandableRow(row) { // eslint-disable-line no-unused-vars
    return true;
  }

  /**
 * This function renders expanded component
 * @param {object} row - data grid row information
 */
  expandComponent(row) { // eslint-disable-line no-unused-vars
    return (
      <span>
        Expanded Row Component Text goes here
      </span>
    );
  }

  /**
 * This function renders collapse/expand icon
 * @param {boolean} isExpandableRow - row is expandable or not
 * @param {boolean} isExpanded - row is expanded or not
 */
  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let expandIcon = null;

    if (isExpandableRow) {
      expandIcon = isExpanded ? <Glyphicon glyph="chevron-right"
        className="glyPhiconArrow glyphiconRed" /> :
        <Glyphicon glyph="chevron-up" className="glyPhiconArrow glyphiconYellow" />;
    }
    return (
      <div> { expandIcon } </div>
    );
  }

  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    const selectRowProp = {
      mode: 'checkbox',
      bgColor: '#CAE1FF',
      clickToExpand: true, // click to expand row, default is false
    };

    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)',
      paginationPanel: appUtils.renderPaginationPanel,
      page: 1, // which page you want to show as default
      sizePerPageList: [5, 10, 20], // you can change the dropdown list for size per page
      sizePerPage: 5, // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 5, // the pagination bar size.
    };

    return (
      <div>
        <div className="table">
          <div className="row">
            <div className="col-md-4">
              {this.props.loading && <SpinnerComponent/>}
              <h4>Search Master</h4>
            </div>
          </div>
        </div>
        <div className="table tab-content">
          <div className="row">
            <BootstrapTable selectRow={selectRowProp} minHeight="300px" data={this.props.data}
              pagination={true} options={options} tableHeaderClass="bootstrapTableHeader"
              headerContainerClass="bootstrapTableHeaderContainer"
              bodyContainerClass="bootstrapTableBodyContainer"
              tableBodyClass="bootstrapTableBody"
              trClassName="bootstrapTableGridRow"
              containerClass="bootstrapContainer"
              expandableRow={ this.isExpandableRow }
              expandComponent={ this.expandComponent }
              expandColumnOptions={ {
                expandColumnVisible: true,
                expandColumnComponent: this.expandColumnComponent,
                columnWidth: 30,
              } }>
              <TableHeaderColumn dataField="id" dataFormat={this.idFormatter} headerAlign="center"
                editable={false} isKey ={true} dataSort={true} >Id</TableHeaderColumn>
              <TableHeaderColumn dataField="name" headerAlign="center" editable={false} filter={{ type: 'TextFilter', delay: 50 }} >Name</TableHeaderColumn>
              <TableHeaderColumn dataField="email" headerAlign="center"
                editable={false}>Email</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
    );
  }
}

SearchMasterComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

SearchMasterComponent.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = store => (
  {
    data: store.searchMasterReducer.data,
    loading: store.searchMasterReducer.loading,
  }
);

/**
 * This function binds actions with component
 * @param {object} dispatch - Dispatcer
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(samplePage1Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMasterComponent);
