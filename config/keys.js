const { model } = require('mongoose');
module.exports = require('./prod');
if (process.env.NODE_ENV == 'production') {
} else {
  module.exports = require('./dev');
}
