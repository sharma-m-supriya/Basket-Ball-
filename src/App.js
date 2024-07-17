import React from 'react';
import BasketballPlayerCard from './component/BasketballPlayerCard';
import './App.css'

const App = () => {
  return (
    <div className="container">
      <BasketballPlayerCard
        name="LeBron James"
        image="https://4kwallpapers.com/images/walls/thumbs_3t/7605.jpg"
        position="Forward"
        stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
      />
    </div>
  );
};

export default App;
