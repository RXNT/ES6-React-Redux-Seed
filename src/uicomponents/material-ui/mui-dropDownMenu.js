import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectSheet from 'react-jss';
// Need to look into this component
/**
 * MuiDropdown component which extends Component
 */
const uiComponent = class MuiDropdown extends Component {
  /**
   * constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = { value: this.props.options[0] };
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * handle change in the state of dropdown
   * @param {*} event 
   * @param {*} index 
   * @param {*} value 
   */
  handleChange(event, index, value) {
    this.setState({ value });
    this.props.input.onChange(value);
  }

  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { sheet, options, classes, input, style, meta, ...custom } = this.props;
    return (
      <div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          className={classes.menu}
          style={style}
          {...custom}
        >
          {options.map((menu, index) =>
            <MenuItem key={index} value={menu} primaryText={menu} />,
          )}
        </DropDownMenu>
      </div>
    );
  }
};


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
export default injectSheet(defaultStyles)(uiComponent);
