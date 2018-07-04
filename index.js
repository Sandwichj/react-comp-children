'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/react-comp-children.production.min.js');
} else {
  module.exports = require('./dist/react-comp-children.development.js');
}
