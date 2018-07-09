import { Component } from 'react';
import PropTypes from 'prop-types';

class Children extends Component {
  /**
   * This React Component will be transformed to stateless functional component on the both node environments 'development' and 'production'
   * by [babel-plugin-transform-react-pure-components]{@link https://www.npmjs.com/package/babel-plugin-transform-react-pure-components}
   */
  /**
   * PropTypes will be removed on 'production' node environment
   * by [babel-plugin-transform-react-remove-prop-types]{@link https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types}
   */
  static propTypes = {
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
  }

  static defaultProps = {
    items: null,
    active: null,
    children: null,
  }

  render() {
    const getActiveItems = (items, active) => {
      const activeItems = [];

      if (!items) {
        return null;
      }

      if (active === null) {
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

    const { items, children, active } = this.props;

    return getActiveItems(
      items || children,
      active,
    );
  }
}

export default Children;
