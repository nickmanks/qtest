/* eslint no-undef: 0 */
/* eslint comma-spacing: 0 */

const configFunc = require('@skan-io/babel-config-react');

module.exports = {
  ...configFunc.default(
    true, // Use jest testing env
    'current', // Node version to target
    ['last 2 versions','not IE < 11'], // Browser targets
    ['last 1 Chrome versions'], // Development browser targets
    [] // Extra babel plugins
  )
};
