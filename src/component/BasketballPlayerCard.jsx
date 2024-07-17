
import React from 'react';
import PropTypes from 'prop-types';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img src={image} alt={name} className="player-image" />
      <div className="player-info">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <p>Points per Game: {stats.pointsPerGame}</p>
          <p>Assists per Game: {stats.assistsPerGame}</p>
          <p>Rebounds per Game: {stats.reboundsPerGame}</p>
        </div>
      </div>
    </div>
  );
};

BasketballPlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    pointsPerGame: PropTypes.number.isRequired,
    assistsPerGame: PropTypes.number.isRequired,
    reboundsPerGame: PropTypes.number.isRequired,
  }).isRequired,
};

export default BasketballPlayerCard;
