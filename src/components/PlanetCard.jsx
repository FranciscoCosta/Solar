import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { info } = this.props;
    const { name: planetName, image: planetImage } = info;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName} ` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  info: PropTypes.shape({
    planetName: PropTypes.string,
    planetImage: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

PlanetCard.defaultProps = {
  info: {},
};

export default PlanetCard;
