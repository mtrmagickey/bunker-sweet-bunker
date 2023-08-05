import React from 'react';

const CharacterSheet = ({ attributes }) => {
  return (
    <div>
      <h3>Character Sheet</h3>
      {attributes.map((attr, index) => (
        <p key={index}>{attr}</p>
      ))}
    </div>
  );
};

export default CharacterSheet;
