import RaisedButton from 'material-ui/RaisedButton';

/**
 * MuiRaisedButton component which extends material-ui/RaisedButton
 */
class MuiRaisedButton extends RaisedButton {
  /**
   * Attach component scope to all functions 
   * @constructor
   */
  constructor(props) { // eslint-disable-line
    super(props);
  }
}

/**
 * Assign the default props to MuiRaisedButton
 */
MuiRaisedButton.defaultProps = {
  style: {
    margin: 12,
  },
};

export default MuiRaisedButton;
