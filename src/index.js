import PropTypes from 'prop-types';

const Children = ({ items, active, ...props }) => {
  const activeItems = [];

  if (!items) {
    items = props.children;
  }

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
