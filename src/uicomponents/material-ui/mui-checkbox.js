/**
 * MuiCheckbox
 * Renders MuiCheckboxes after applying styles
 * 10/04/2017
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';
import _ from 'lodash';

/**
 * MuiCheckBox
 * @class
 * @augments Component
 * @param {[]} options - An Array Containing list of items to be shown
 * @param {string} className - Bootstrap className
 * @param {object} style - The style to be applied to the component
 * @returns an array of options selected by the users
 */
class MuiCheckbox extends Component {
  /**
  * @constructor
  * @param {*} props 
  */
  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * @function componentWillMount - Life cycle method that executes before the component is mounted
   */
  componentWillMount() {
    let values = {}; //eslint-disable-line
    this.props.options.map( function(option){ //eslint-disable-line
      values[option] = false;
    });
    this.setState({ values });
  }
  /**
   * @function handleChange - Handles changes in the checkboxes
   * @param {*} event 
   */
  handleChange(option) {
    this.setState((prevState) => {
      this.state.values[option] = !prevState.values[option];
    }, () => {
      let returnValues = []; //eslint-disable-line
      _.forOwn(this.state.values, function (value, key) { //eslint-disable-line
        if (value === true) {
          returnValues.push(key);
        }
      });
      this.props.input.onChange(returnValues);
    });
  }
  /**
  * @function render
  * Renders a MUI element into the DOM in the supplied container 
  * @TODO: Passing {...input} will override the input in props to boolean. Check
  */
  render() {
    const { classes, className, options, style, input, meta, ...custom } = this.props;
    const combinedClassName = `${classes.checkBox}`;
    return (
      <div>
        {options.map(option => (
          <FormControlLabel key={option}
            control={
              <Checkbox
                checked = {this.state[option]}
                onClick= {() => this.handleChange(option)}
                className={combinedClassName}
                {...custom}
                value={option}
              />
            }
            label={option}
          />
        ))}
      </div>
    );
  }
}

/**
 * Default styles applied to the components
 * @param {*} theme 
 */
const styles = theme => ({
  checkBox: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
});

/**
 * Typechecking on the props for MuiButton
 * label
 * classes 
 */
MuiCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};

/**
 * @function withStyles - Export the UI Component after applying styles
 * @param {object} styles - The default style applied to the component
 * @param {class} MuiCheckbox - Component where the styles are applied
 */
export default withStyles(styles)(MuiCheckbox);
