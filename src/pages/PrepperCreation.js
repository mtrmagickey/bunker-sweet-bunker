
import React, { useState } from 'react';
import ulteriorMotivation from '../attributes/Ulteriormotivation.json';
import survivalSkill from '../attributes/SurvivalSkill.json';
import personalityQuirk from '../attributes/PersonalityQuirk.json';
import Footer from './Footer';

const PrepperCreation = () => {
  const [ulteriorMotivationRoll, setUlteriorMotivationRoll] = useState(null);
  const [survivalSkillRoll, setSurvivalSkillRoll] = useState(null);
  const [personalityQuirkRoll, setPersonalityQuirkRoll] = useState(null);
  const [secretBunkerFlawRoll, setSecretBunkerFlawRoll] = useState(null);

  const rollD20 = () => Math.floor(Math.random() * 20) + 1;

  const rollForAttribute = (setAttribute) => {{
    const roll = rollD20();
    setAttribute(roll);
  }};

  return (
    <div>
      <h1>Prepper Character Creation</h1>
      <button onClick={() => rollForAttribute(setUlteriorMotivationRoll)}>Roll for Ulterior Motivation</button>
      <p>Ulterior Motivation: {ulteriorMotivationRoll ? ulteriorMotivation.motivations.find(m => m.roll === ulteriorMotivationRoll).motivation : 'Not rolled yet'}</p>
      <button onClick={() => rollForAttribute(setSurvivalSkillRoll)}>Roll for Survival Skill</button>
      <p>Survival Skill: {survivalSkillRoll ? survivalSkill.skills.find(s => s.roll === survivalSkillRoll).skill : 'Not rolled yet'}</p>
      <button onClick={() => rollForAttribute(setPersonalityQuirkRoll)}>Roll for Personality Quirk</button>
      <p>Personality Quirk: {personalityQuirkRoll ? personalityQuirk.quirks.find(q => q.roll === personalityQuirkRoll).quirk : 'Not rolled yet'}</p>
      <button onClick={() => rollForAttribute(setSecretBunkerFlawRoll)}>Roll for Secret Bunker Flaw</button>
      <p>Secret Bunker Flaw: {secretBunkerFlawRoll ? 'Define the Secret Bunker Flaw here based on the roll' : 'Not rolled yet'}</p>
      <Footer />
      </div>
  );
};

export default PrepperCreation;
