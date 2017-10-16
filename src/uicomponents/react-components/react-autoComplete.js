import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
/**
 * MuiAutoComplete component which extends Component
 * @args: options - an array containing the suggestions
 */
class ReactAutoComplete extends Component {
  /**
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { options, classes, input, style, meta, ...custom } = this.props;
    // Name is deprecated from Typeahead
    if(input && input) { delete input.name; } // eslint-disable-line  
    return (
      <Typeahead
        className = {classes.input}
        options={options}
        {...input}
        {...custom}
      />
    );
  }
}

/**
 * Default styles that are applied to the above component
 */
const defaultStyles = {
  checkbox: {
    margin: 5,
  },
};

ReactAutoComplete.propTypes = {
  options: PropTypes.array.isRequired,
};

/**
 * Export the UI Component after applying styles
 */
export default injectSheet(defaultStyles)(ReactAutoComplete);
