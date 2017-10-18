/**
 * ReactAutoComplete
 * Renders a React input component with autocomplete
 * 09/24/2017
 */
import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
/**
 * ReactAutoComplete Class
 * @augments Component
 * @param {[]} options - An array containing the suggestions
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 */
class ReactAutoComplete extends Component {
  /**
   * @function render
   * Renders a React element into the DOM in the supplied container 
   */
  render() {
    const { options, classes, className, theme, input, style, meta, ...custom } = this.props;
    const combinedClassName = `${classes.input} ${className}`;
    // Name is deprecated from Typeahead
    if(input && input.name) { delete input.name; } // eslint-disable-line  
    return (
      <Typeahead
        className = {combinedClassName}
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
const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
  },
});

/**
 * Typechecking on the props for ReactAutoComplete
 * options
 * classes 
 */
ReactAutoComplete.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

/**
 * @function injectSheet - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} ReactAutoComplete - Component where the styles are applied
 */
export default injectSheet(styles)(ReactAutoComplete);
