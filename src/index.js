import PropTypes from 'prop-types';

const Children = ({ items, children, active, ...props }) => {
  const activeItems = [];

  if (!items) {
    items = children;
  }

  if (!items) {
    throw new Error('It must have children at least one.');
  }

  if ((typeof active === 'undefined') || active === null) {
    return Array.isArray(items) ? items : items.values();
  }

  if (!Array.isArray(active)) {
    return items[active];
  }

  if (Array.isArray(items)) {
    active.sort();
  }

  active.forEach(activeItemIndex => {
    activeItems.push(items[activeItemIndex]);
  });

  return activeItems;
};

const itemsPropTypes = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object,
]);

const activePropTypes = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
]);

Children.propTypes = {
  items: itemsPropTypes,
  active: activePropTypes,
};

export default Children;
