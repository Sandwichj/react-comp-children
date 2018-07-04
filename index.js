'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/react-comp-children.production.js');
} else {
  module.exports = require('./build/react-comp-children.development.min.js');
}
