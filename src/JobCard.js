import React from 'react';

const TeamCard = ({ name, jobTitle, description, imageUrl }) => {
  return (
    <div className="w-80 p-4 hover:scale-105 transition-transform">
      <div className="bg-gradient-to-b from-indigo-500 via-blue-400 to-pink-300 p-6 rounded-lg shadow-lg text-white">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-md mb-4">{jobTitle}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
