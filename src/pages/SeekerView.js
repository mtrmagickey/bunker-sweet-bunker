import React, { useState } from 'react';
import ulteriorMotivation from '../attributes/Ulteriormotivation.json';
import survivalSkill from '../attributes/SurvivalSkill.json';
import personalityQuirk from '../attributes/PersonalityQuirk.json';
import Footer from './Footer';
import '../SeekerView.css';
import QuestionGenerator from './QuestionGenerator';

const seekerBackgrounds = [
  require('../assets/BSB_imgSeek_1.jpg'),
  require('../assets/BSB_imgSeek_2.jpg'),
  require('../assets/BSB_imgSeek_3.jpg'),
  require('../assets/BSB_imgSeek_4.jpg'),
  require('../assets/BSB_imgSeek_5.jpg'),
  require('../assets/BSB_imgSeek_6.jpg'),
  require('../assets/BSB_imgSeek_7.jpg'),
  require('../assets/BSB_imgSeek_8.jpg'),
  require('../assets/BSB_imgSeek_9.jpg'),
];

const SeekerView = () => {
  const [ulteriorMotivationRoll, setUlteriorMotivationRoll] = useState(null);
  const [survivalSkillRoll, setSurvivalSkillRoll] = useState(null);
  const [personalityQuirkRoll, setPersonalityQuirkRoll] = useState(null);

  const rollForAttribute = (setRollState) => {
    const roll = Math.floor(Math.random() * 20) + 1;
    setRollState(roll);
  };

  const randomBackground = seekerBackgrounds[Math.floor(Math.random() * seekerBackgrounds.length)];

  return (
    <div className="seeker-container" style={{ backgroundImage: `url(${randomBackground})` }}>
            <div className="text-container">

      <h1>Bunker Seeker Character Creation</h1>
      <button onClick={() => rollForAttribute(setUlteriorMotivationRoll)}>Roll for Ulterior Motivation</button>
      <p>Ulterior Motivation: {ulteriorMotivationRoll ? ulteriorMotivation.motivations.find(m => m.roll === ulteriorMotivationRoll).motivation : 'Not rolled yet'}</p>
      <button onClick={() => rollForAttribute(setSurvivalSkillRoll)}>Roll for Survival Skill</button>
      <p>Survival Skill: {survivalSkillRoll ? survivalSkill.skills.find(s => s.roll === survivalSkillRoll).skill : 'Not rolled yet'}</p>
      <button onClick={() => rollForAttribute(setPersonalityQuirkRoll)}>Roll for Personality Quirk</button>
      <p>Personality Quirk: {personalityQuirkRoll ? personalityQuirk.quirks.find(q => q.roll === personalityQuirkRoll).quirk : 'Not rolled yet'}</p>
      <h2>Lightning-Round Question for Prepper</h2>
      <QuestionGenerator />
    </div>
    <Footer />
    </div>
  );
}

export default SeekerView;
