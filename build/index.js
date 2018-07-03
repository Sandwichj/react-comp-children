'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Children = function Children(_ref) {
  var items = _ref.items,
      active = _ref.active,
      props = _objectWithoutProperties(_ref, ['items', 'active']);

  var activeItems = [];

  if (!items) {
    items = props.children;
  }

  if (!items) {
    return null;
  }

  if (typeof active === 'undefined' || active === null) {
    return Array.isArray(items) ? items : Object.keys(items).map(function (key) {
      return items[key];
    });
  }

  if (!Array.isArray(active)) {
    return items[active];
  }

  if (Array.isArray(items) && Array.isArray(active)) {
    active.sort();
  }

  active.forEach(function (activeItemIndex) {
    activeItems.push(items[activeItemIndex]);
  });

  return activeItems;
};

var itemsPropTypes = _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]);

var activePropTypes = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]))]);

Children.propTypes = {
  items: itemsPropTypes,
  active: activePropTypes
};

exports.default = Children;