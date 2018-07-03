import PropTypes from 'prop-types';

const Children = ({ items, active = 0, ...props }) => {
  const activeItems = [];

  if (!items) {
    items = props.children;
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
  active: activePropTypes.isRequired,
};

export default Children;
