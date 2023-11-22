import React from 'react';
import { FaAndroid } from 'react-icons/fa';

const GameCard = ({ game, appLogo, gameScreen, additionalClasses }) => {
  return (<div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] m-4 hover:scale-105 transition shadow-xl hover:shadow-2xl">
    <div
      className={`relative flex flex-col items-center justify-center w-72 p-6 rounded-lg bg-gradient-to-bl from-base-300 to-base-100   ${
        additionalClasses ? ' ' + additionalClasses : ''
      }`}
    >
      <h2 className="text-3xl font-bold mb-4">{game.name}</h2>
      <div className="flex items-center mb-4">
        <div className="rounded-box overflow-hidden mr-4 bg-white">
          <img src={appLogo} alt="App Logo" className="w-24 h-24" />
        </div>
        <p className="text-lg w-32 text-left">{game.shortdesc}</p>
      </div>
      <p className="text-lg">{game.description}</p>
      <div className="rounded-lg overflow-hidden mt-4">
        <img src={gameScreen} alt="Game Screen" className="w-full object-cover" />
      </div>
    </div>
    </div>
  );
};

export default GameCard;
