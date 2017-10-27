/**
 * ReactTableDevExpress
 * React table using bootstrap and devexpress
 */
import React, { Component } from 'react';
import {
  SortingState,
  LocalSorting,
  FilteringState,
  LocalFiltering,
  SelectionState,
  EditingState,
  PagingState,
  LocalPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  TableView,
  TableHeaderRow,
  TableFilterRow,
  TableSelection,
  TableEditRow,
  TableEditColumn,
  PagingPanel,
} from '@devexpress/dx-react-grid-bootstrap3';
import { connect } from 'react-redux';
import _ from 'lodash';
import { load, remove, save, update } from './actions';

/**
 * ReactTableDevExpress
 * @class
 * @param [{object}] columns - An array of objects for the columns
 * @param [{object}] rows - An array of objects for rows
 */
class ReactTableDevExpress extends Component {
  /**
   * 
   */
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
      columns: [ // this.props.column
        { name: 'name', title: 'name' },
        { name: 'email', title: 'email' },
        /* ... */
      ],
      currentPage: 0, // this.props.currentpage
      pageSize: 5, // this.props.pagesize
      allowedPageSizes: [5, 10, 15], // this.props.allowedPageSize
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
  }

  /**
   * 
   */
  componentWillMount() {
    this.props.load();
  }

  /**
   * 
   */
  changePageSize(pageSize) {
    this.setState({ pageSize });
  }

  /**
   * 
   * @param {*} currentPage 
   */
  changeCurrentPage(currentPage) {
    this.setState({ currentPage });
  }
  /**
   * 
   * @param {*} rowIndex 
   */
  handleRowSelection(rowIndex) {
    rowIndex.map(index => (
      console.log('Row: ', this.state.rows[index - 1]) // eslint-disable-line
    ));
  }


  /**
   * 
   * @param {*} param0 
   */
  commitChanges({ added, changed, deleted }) {
    if (added) {
      this.props.save(added[0]);
    }
    if (changed) {
      const id = _.keys(changed)[0];
      const value = _.values(changed)[0];
      this.props.update([id, value]);
    }
    if (deleted) {
      this.props.remove(deleted[0]);
    }
  }

  /**
   * 
   * @param {*} row 
   */
  getRowId(row) {
    return row.id;
  }

  /**
   * 
   */
  render() {
    const { columns = [], pageSize, allowedPageSizes } = this.state;
    const rows = this.props.data || [];
    return (
      <Grid
        rows = {rows}
        columns = {columns}
        getRowId={this.getRowId}
      >
        <SelectionState
          onSelectionChange={this.handleRowSelection.bind(this)}
        />

        <FilteringState defaultFilters={[]} />
        <LocalFiltering />

        <SortingState />
        <LocalSorting />

        <PagingState
          currentPage={this.state.currentPage}
          onCurrentPageChange={this.changeCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={this.changePageSize}
        />
        <LocalPaging />

        <TableView />
        <TableHeaderRow allowSorting />
        <TableFilterRow />
        <TableSelection
          showSelectionColumn={true}
          showSelectAll={false}
          selectByRowClick={true}
          highlightSelected={true}
        />
        <EditingState
          onCommitChanges={this.commitChanges}
        />
        <TableEditRow />
        <TableEditColumn
          allowAdding
          allowEditing
          allowDeleting
        />
        <PagingPanel
          allowedPageSizes={allowedPageSizes}
        />
      </Grid>
    );
  }
}

/**
 * 
 * @param {*} store 
 */
function mapStateToProps(store) {
  return {
    data: store.tableReducer.data,
  };
}

/**
 * 
 */
export default connect(mapStateToProps, { load, remove, save, update })(ReactTableDevExpress);
