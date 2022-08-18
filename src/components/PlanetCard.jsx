import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props.info;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ planetName } />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.defaultProps = {
  planetName: 'Stranger',
  planetImage: 'Stranger',
};

PlanetCard.PropTypes = {
  info: PropTypes.shape({
    planetName: PropTypes.string,
    planetImage: PropTypes.string,
  }),
};
