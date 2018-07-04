'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Children(props) {
  var getActiveItems = function getActiveItems(items, active) {
    var activeItems = [];

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

  return getActiveItems(props.items || props.children, props.active);
}

Children.propTypes = {
  items: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
  active: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]))]),
  children: _propTypes2.default.array
};

exports.default = Children;
