import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * This React Component will be transformed to stateless functional component on the both node environments 'development' and 'production'
 * by [babel-plugin-transform-react-pure-components]{@link https://www.npmjs.com/package/babel-plugin-transform-react-pure-components}
 */
class Children extends Component {
  render() {
    const getActiveItems = (items, active) => {
      const activeItems = [];

      if (!items) {
        return null;
      }

      if ((typeof active === 'undefined') || active === null) {
        return Array.isArray(items) ? items : Object.keys(items).map(key => items[key]);
      }

      if (!Array.isArray(active)) {
        return items[active];
      }

      if (Array.isArray(items) && Array.isArray(active)) {
        active.sort();
      }

      active.forEach(activeItemIndex => {
        activeItems.push(items[activeItemIndex]);
      });

      return activeItems;
    };

    const applyKeys = (items, prefix='child_') => {
      for (index in items) {
        items[index].key = prefix+index;
      }
    };

    if (this.props.autoKeyGen) {
      const items = this.props.items;
      applyKeys(items);
    }

    return getActiveItems(
      items || this.props.children,
      this.props.active,
    );
  }
}

/**
 * PropTypes will be removed on 'production' node environment
 * by [babel-plugin-transform-react-remove-prop-types]{@link https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types}
 */
Children.defaultProps = {
  autoKeyGen: false,
};

Children.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ])),
  ]),
  children: PropTypes.array,
  autoKeyGen: PropTypes.bool,
};

export default Children;
