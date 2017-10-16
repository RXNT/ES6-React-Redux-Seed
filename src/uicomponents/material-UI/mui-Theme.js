import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green, // Purple and green play nicely together.
    secondary: blue,
    error: red,
  },
  spacing: {
    unit: 10,
  },
});

export default theme;
