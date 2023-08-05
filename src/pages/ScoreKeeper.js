import React, { useState } from 'react';
import '../ScoreKeeper.css';


const ScoreKeeper = ({ seekers }) => {
  const [scores, setScores] = useState(
    seekers.reduce((obj, seeker) => ({ ...obj, [seeker]: 0 }), {})
  );
  const [labels, setLabels] = useState(
    seekers.reduce((obj, seeker) => ({ ...obj, [seeker]: seeker }), {})
  );

  const incrementScore = (seeker) => {
    setScores((prevScores) => ({
      ...prevScores,
      [seeker]: prevScores[seeker] + 1
    }));
  };

  const decrementScore = (seeker) => {
    setScores((prevScores) => ({
      ...prevScores,
      [seeker]: prevScores[seeker] - 1
    }));
  };

  const handleLabelChange = (event, seeker) => {
    const newLabel = event.target.value;
    setLabels((prevLabels) => ({
      ...prevLabels,
      [seeker]: newLabel
    }));
  };

  return (
    <div>
      {seekers.map((seeker) => (
        <div key={seeker}>
          <button onClick={() => decrementScore(seeker)}>-</button>
          {scores[seeker]}
          <button onClick={() => incrementScore(seeker)}>+</button>
          <input 
            type="text" 
            value={labels[seeker]} 
            onChange={(event) => handleLabelChange(event, seeker)}
          />
        </div>
      ))}
    </div>
  );
};

export default ScoreKeeper;
