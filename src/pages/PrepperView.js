import React from 'react';
import CharacterSheet from './CharacterSheet';
import PrepperCreation from './PrepperCreation';
import Footer from './Footer';
import ScoreKeeper from './ScoreKeeper';
import '../PrepperView.css';
import QuestionGenerator from './QuestionGenerator';

const prepperBackgrounds = [
  require('../assets/BSB_imgPrep_1.jpg'),
  require('../assets/BSB_imgPrep_2.jpg'),
  require('../assets/BSB_imgPrep_3.jpg'),
  require('../assets/BSB_imgPrep_4.jpg'),
  require('../assets/BSB_imgPrep_5.jpg'),
  require('../assets/BSB_imgPrep_6.jpg'),
  require('../assets/BSB_imgPrep_7.jpg'),
  require('../assets/BSB_imgPrep_8.jpg'),
];

const PrepperView = () => {
  const seekers = ['Bunker Seeker #1', 'Bunker Seeker #2', 'Seeker #3 (optional)', 'Seeker #4 (optional)'];
  const randomBackground = prepperBackgrounds[Math.floor(Math.random() * prepperBackgrounds.length)];

  return (
    <div className="prepper-container" style={{ backgroundImage: `url(${randomBackground})` }}>
           <div className="text-container">
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
    </div>
    <Footer />
    </div>
  );
}

export default PrepperView;
