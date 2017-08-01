/* eslint-disable */
var exec = require('child_process').exec;
exec('node -v', function (err, stdout, stderr) {
  if (err) throw err;
  if (parseFloat(stdout) < 6) {
    throw new Error('ERROR: Prescriber Dashboard requires node 4.0 or greater.');
    process.exit(1);
  }
});
