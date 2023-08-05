import React, { useState } from 'react';

const CommercialBreak = () => {
  const [adCopy, setAdCopy] = useState('');

  const adCopies = ['Ad copy 1', 'Ad copy 2', 'Ad copy 3', 'Ad copy 4', 'Ad copy 5']; // Replace with actual ad copies

  const startCommercialBreak = () => {
    const randomIndex = Math.floor(Math.random() * adCopies.length);
    setAdCopy(adCopies[randomIndex]);
  };

  return (
    <div>
      <h2>Commercial Break</h2>
      <button onClick={startCommercialBreak}>Start Commercial Break</button>
      {adCopy && <p>Ad copy: {adCopy}</p>}
    </div>
  );
};

export default CommercialBreak;
