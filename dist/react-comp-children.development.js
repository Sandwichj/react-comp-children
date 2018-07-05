'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This React Component will be transformed to stateless functional component on the both node environments 'development' and 'production'
 * by [babel-plugin-transform-react-pure-components]{@link https://www.npmjs.com/package/babel-plugin-transform-react-pure-components}
 */
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

  var applyKeys = function applyKeys(items) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'child_';

    for (index in items) {
      items[index].key = prefix + index;
    }
  };

  var items = props.items;
  applyKeys(items);

  return getActiveItems(items || props.children, props.active);
}

/**
 * PropTypes will be removed on 'production' node environment
 * by [babel-plugin-transform-react-remove-prop-types]{@link https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types}
 */


Children.propTypes = {
  items: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
  active: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]))]),
  children: _propTypes2.default.array,
  autoKeys: _propTypes2.default.bool
};

exports.default = Children;
