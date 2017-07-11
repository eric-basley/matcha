console.log(`running in ${process.env.NODE_ENV} mode.`); // eslint-disable-line

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configure-store-prod');
} else {
  module.exports = require('./configure-store-dev');
}
