import PropTypes from 'prop-types';

const Children = ({ items=[], active=0 }) => {
  const activeItems = [];

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
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.objectOf(PropTypes.node),
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
  items: itemsPropTypes.isRequired,
  active: activePropTypes.isRequired,
};

export default Children;
