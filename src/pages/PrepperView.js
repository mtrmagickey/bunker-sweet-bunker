import React from 'react';
import CharacterSheet from './CharacterSheet';
import PrepperCreation from './PrepperCreation';
import Footer from './Footer';
import ScoreKeeper from './ScoreKeeper';
import '../PrepperView.css';
import QuestionGenerator from './QuestionGenerator';



const PrepperView = () => {
const seekers = ['Bunker Seeker #1', 'Bunker Seeker #2', 'Seeker #3 (optional)', 'Seeker #4 (optional)'];

  return (
    <div>
      <PrepperCreation />
      <h2>Contestant Score Keeping Notes!</h2>
      <ScoreKeeper seekers={seekers} />
      <h2>Round 1 Question for Bunker-Seekers</h2>
      <QuestionGenerator />
      <h2>Round 2 Question for Bunker-Seekers</h2>
      <QuestionGenerator />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
</div>
  );
};

export default PrepperView;
