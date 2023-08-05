import React, { useState } from 'react';
import questionsData from './Questions.json';

const Round = ({ roundNumber, totalSeekers }) => {
  // State to manage the selected question
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  // State to manage the current player's turn
  const [currentTurn, setCurrentTurn] = useState(0); // 0 for Prepper, 1 to totalSeekers for Seekers

  // Function to roll a d20 and select a question
  const rollForQuestion = () => {
    const questionNumber = Math.floor(Math.random() * 20) + 1;
    const question = questionsData.questions.find(q => q.roll === questionNumber).question;
    setSelectedQuestion(question);
  };

  // Function to handle the progression to the next turn
  const nextTurn = () => {
    if (currentTurn < totalSeekers) {
      setCurrentTurn(currentTurn + 1);
    } else {
      // Logic to handle the end of the round and transition to the next round or phase
    }
  };

  return (
    <div>
      <h1>Round {roundNumber}</h1>
      <button onClick={rollForQuestion}>Roll for Question</button>
      <p>{selectedQuestion}</p>
      <button onClick={nextTurn}>Next Turn</button>
      <p>Current turn: {currentTurn === 0 ? 'Prepper' : 'Seeker ' + currentTurn}</p>
    </div>
  );
};

export default Round;
