import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
/**
 * 
 */
class ReactTable extends Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  /**
   * 
   */
  // componentWillMount() {
  //   this.setState({ data: this.props.data });
  // }

  /**
   * 
   * @param {*} row 
   * @param {*} fieldName 
   * @param {*} value 
   */
  onCellEdit(row, fieldName, value) {
    const { data } = this.state;
    let rowIdx;
    const targetRow = data.find((prod, i) => {
      if (prod.id === row.id) {
        rowIdx = i;
        return true;
      }
      return false;
    });
    if (targetRow) {
      targetRow[fieldName] = value;
      data[rowIdx] = targetRow;
      this.setState({ data });
    }
  }
  /**
   * 
   * @param {*} row 
   */
  onAddRow(row) {
    // call the reducer
    const newData = [{ ...this.state.data }, row];
    this.setState({
      data: newData,
    });
  }
  /**
   * 
   * @param {*} row 
   */
  onDeleteRow(row) {
    const data = this.state.data.filter( item => { // eslint-disable-line
      return item.id !== row[0];
    });

    this.setState({ data });
  }

  /* eslint-disable no-param-reassign */
  /**
   * 
   */
  remote(remoteObj) {
    // editing, insert and delete row should be handled in redux
    remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    remoteObj.dropRow = true;
    return remoteObj;
  }
  /* eslint-enable no-param-reassign */
  /**
   * 
   */
  render() {
    const { data, headers, primary, ...custom } = this.props;
    const cellEditProp = {
      mode: 'click',
    };
    const selectRow = {
      mode: 'checkbox',
      clickToSelct: true,
    };
    return (
      <BootstrapTable
        data={ this.state.data }
        keyField={primary}
        selectRow={ selectRow }
        remote={ this.remote }
        insertRow deleteRow search pagination
        cellEdit={ cellEditProp }
        exportCSV
        csvFileName='table'
        options={ {
          onCellEdit: this.onCellEdit.bind(this),
          onDeleteRow: this.onDeleteRow.bind(this),
          onAddRow: this.onAddRow.bind(this),
        } }
        {...custom}
      >
        {headers.map((header, i) =>
          <TableHeaderColumn key={i} {...header.properties} >
            {header.name}
          </TableHeaderColumn>,
        )}
      </BootstrapTable>
    );
  }
}

const defaultStyles = {
  table: {
    margin: 5,
  },
};

export default injectSheet(defaultStyles)(ReactTable);
