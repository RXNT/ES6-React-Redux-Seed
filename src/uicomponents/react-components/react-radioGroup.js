/**
 * HtmCheckbox
 * Renders a HTML Checkbox after applying react-jss styles
 * 09/15/2017
 */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
/**
 * HtmCheckbox component which extends Component
 * @arguments: options
 */
class ReactRadioGroup extends Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  /**
   * 
   */
  handleOptionChange(event) {
    this.setState({ value: event.target.value });
    this.props.input.onChange(event.target.value);
  }
  /**
   * 
   */
  render() {
    const { options, classes, sheet, input, style, meta, ...custom } = this.props;
    return (
      <div>
        {options.map((option) =>(<div key={option}> <label><input type="radio"  checked= {this.state.value === option} onChange = {this.handleOptionChange} value={option} {...custom} />{option}</label> </div> //eslint-disable-line
        ))}
      </div>
    );
  }
}

/**
 * Default styles that are directly applied to the above component
 */
const defaultStyles = {
  input: {
    margin: 5,
  },
};

ReactRadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
};

/**
 * Export the UI Component after applying styles
 */
export default injectSheet(defaultStyles)(ReactRadioGroup);
