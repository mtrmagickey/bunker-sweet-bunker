import React from 'react';

const PlayerIntroduction = ({ player }) => {
  const introductionQuestions = [
    'What is your big goal when you get out of bed every morning?',
    'If you had to pick one, what would be your favorite hobby?',
    'What is one thing you could not live without?',
    'What is a song you cannot help but sing along to?',
    'You had an interesting job before the end of the world, right? What was it?',
    'Backstage, you were telling me something interesting about your hometown. How about you share that with the audience?'
  ];

  const rollForQuestion = () => {
    const roll = Math.floor(Math.random() * introductionQuestions.length);
    return introductionQuestions[roll];
  };

  return (
    <div>
      <h3>{player}</h3>
      <p>{rollForQuestion()}</p>
    </div>
  );
};

export default PlayerIntroduction;
