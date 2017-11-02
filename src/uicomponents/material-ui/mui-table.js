// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});
/**
 * args: [headers], [{data}]
 */
class MuiTable extends Component {
  /**
   * 
   */
  render() {
    const { classes, headers, data, input, meta, ...custom } = this.props;
    /**
     * 
     */
    return (
      <Paper className={classes.paper}>
        <Table {...custom} >
          <TableHead>
            <TableRow>
              {headers.map((header, i) => (
                <TableCell key={i} > {header.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((items, i) => { // eslint-disable-line
              return (
                <TableRow key={i}>
                  {items.map(item => (
                    <TableCell key={item}>{item}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

MuiTable.propTypes = {
  classes: PropTypes.object.isRequired,
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default withStyles(styles)(MuiTable);
