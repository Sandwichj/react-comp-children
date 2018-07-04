import { Component } from 'react';
import PropTypes from 'prop-types';

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

    return getActiveItems(
      this.props.items || this.props.children,
      this.props.active,
    );
  }
}

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
};

export default Children;
