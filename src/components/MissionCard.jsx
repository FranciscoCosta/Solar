import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { infoM } = this.props;
    const { name, year, country, destination } = infoM;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}
MissionCard.propTypes = {
  infoM: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.number,
    country: PropTypes.string,
    destination: PropTypes.string,
  }),
};

MissionCard.defaultProps = {
  infoM: {},
};

export default MissionCard;
