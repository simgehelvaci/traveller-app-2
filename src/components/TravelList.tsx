import React from 'react';

interface TravelListProps {
  title: string;
  places: { id: number; name: string }[];
}

const TravelList: React.FC<TravelListProps> = ({ title, places }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {places.map((place) => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;