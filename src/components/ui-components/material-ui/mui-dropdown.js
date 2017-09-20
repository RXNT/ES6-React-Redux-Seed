import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectSheet from 'react-jss';
//Need to look into not working well
/**
 * MuiDropdown component which extends Component
 */
const uiComponent=  class MuiDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }
  
  handleChange(event, index, value){ this.setState({value}); }
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, menuItems, classes, input, style, meta, ...custom } = this.props;
    let value = 0;
    return (
        <DropDownMenu
          value={this.state.value} 
          onChange={this.handleChange}
          className={classes.menu}
          style={style}
          {...input}
          {...custom}
        >
        {menuItems.map((menu) => <MenuItem key={menu} value={++value} primaryText={menu}/> //eslint-disable-line
        )}
        </DropDownMenu>
    );
  }
}

/**
 * Default styles that are applied to the above component
 */
const defaultStyles = {
  menu: {
    width: 200,
  },
};

/**
 * Export the UI Component after applying styles
 */
export default injectSheet(defaultStyles)(uiComponent)

