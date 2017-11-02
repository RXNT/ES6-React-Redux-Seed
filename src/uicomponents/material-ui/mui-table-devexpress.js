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
} from '@devexpress/dx-react-grid-material-ui';
import { connect } from 'react-redux';

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
      rows: this.props.data,
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
    let { rows } = this.state;
    if (added) {
      const startingAddedId = rows.length + 1; // (rows.length - 1) > 0 ? rows[
      // rows.length - 1].id + 1 : 0;
      rows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      rows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      rows = rows.filter(row => !deletedSet.has(row.id));
    }
    this.setState({ rows });
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
    const { rows, columns, pageSize, allowedPageSizes } = this.state;
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
const mapStateToProps = store => (
  {
    data: store.searchMasterReducer.data,
  }
);


/**
 * 
 */
export default connect(mapStateToProps)(ReactTableDevExpress);
