import React, { useState } from 'react';
import PlayerIntroduction from './PlayerIntroduction';
import CommercialBreak from './CommercialBreak';
import Footer from './Footer';
import '../HostView.css';


const HostView = () => {
  const [introductionRoll, setIntroductionRoll] = useState(null);
  const [seekers, setSeekers] = useState(['Bunker Seeker 1', 'Bunker Seeker 2', 'Bunker Seeker 3 (optional)', 'Bunker Seeker 4 (optional)']); // placeholders for now

  const rollForIntroduction = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setIntroductionRoll(roll);
  };

  const getIntroductionText = () => {
    switch (introductionRoll) {
      case 1:
        return `Ladies and Gentlemen, grab your radiation suits, because 'Bunker Sweet Bunker' is here! As nuclear sirens wail and fallout looms, we're on the hunt for logic, leadership, and the ideal partner to share a sheltered nook in the last bastion of civilization!

        Is that the scent of camaraderie, or just the lingering radiation? Either way, our contestants are ready to show they have the nuclear know-how to be the ultimate bunker companion!
        
        From iodine tablets to fallout forecasts, survival smarts will be put to the test. Personal quirks will be unveiled, and true intentions laid bare, as our local prepper seeks a fellow survivor to ration water and recount the days before the Big Boom!
        
        So calibrate your Geiger counters and settle in! The atomic age may have ended with a bang, but the excitement is just igniting here on 'Bunker Sweet Bunker!'`;
      case 2:
        return `Ladies and Gentlemen, lock your doors, because 'Bunker Sweet Bunker' is about to begin! As the undead roam and the moans grow louder, we're looking for bravery, brains, and the perfect teammate to share a fortified haven away from hungry zombies!

        Is that the aroma of friendship, or just the foul stench of the living dead? Our contestants are prepared to prove they've got the zombie-zapping zeal to be the ultimate shelter partner!
        
        From barricades to brainpower, survival instincts will be challenged. Secrets will be exposed, and hidden agendas revealed, as our local prepper seeks a co-survivor to share canned goods and zombie escape plans!
        
        So grab your baseball bats and get ready! The zombie apocalypse may be upon us, but the entertainment is just rising from the grave here on 'Bunker Sweet Bunker!'`
        ;
      case 3:
        return `Ladies and Gentlemen, grab your life vests, because 'Bunker Sweet Bunker' is setting sail! As the waters rise and civilization sinks, we're seeking wisdom, adaptability, and the ideal mate to share a watertight refuge during the world's greatest flood!

        Is that the smell of companionship, or just the salty sea air? Our contestants are eager to demonstrate they've got the flood-fighting fortitude to be the top bunker buddy!
        
        From sandbags to survival rafts, flood preparedness will be evaluated. Traits will be uncovered, and true goals unearthed, as our local prepper looks for someone to share dry land and tales of the time before the Deluge!
        
        So don your raincoats and climb aboard! The great flood may be engulfing the world, but the adventure is just beginning here on 'Bunker Sweet Bunker!'`
        ;
      case 4:
        return `Ladies and Gentlemen, scan the skies, because 'Bunker Sweet Bunker' has landed! As extraterrestrials invade and Earth's future hangs in the balance, we're searching for ingenuity, courage, and the perfect comrade to share an intergalactic-proof shelter!

        Is that the whiff of teamwork, or just the odd scent of alien technology? Our contestants are primed to show they've got the otherworldly wisdom to be the best bunker ally!
        
        From laser defenses to communication with the unknown, alien survival skills will be assessed. Personal quirks will be revealed, and hidden motives uncovered, as our local prepper seeks a fellow defender to strategize and reminisce about life before the Invasion!
        
        So ready your ray guns and tune in! The alien invasion may be in full swing, but the excitement is just beaming up here on 'Bunker Sweet Bunker!'`
        ;
      case 5:
        return `Ladies and Gentlemen, brace for impact, because 'Bunker Sweet Bunker' is hitting the airwaves! As meteors descend and the sky ignites, we're scouting for quick thinking, resilience, and the consummate accomplice to share a rock-solid refuge during Earth's meteoric crisis!

        Is that the fragrance of unity, or just the burning atmosphere? Our contestants are fired up to prove they've got the meteor-dodging mettle to be the ultimate shelter mate!
        
        From impact predictions to fallout shelters, survival acumen will be probed. Hidden quirks will be brought to light, and true desires unearthed, as our local prepper searches for a co-survivor to ration supplies and recount the days before the Skyfall!
        
        So grab your telescopes and buckle up! The meteor storm may be raging, but the thrill is just crashing down here on 'Bunker Sweet Bunker!'`
        ;
      case 6:
        return `Ladies and Gentlemen, power up your firewalls, because 'Bunker Sweet Bunker' is going live! As machines rebel and circuits spark rebellion, we're on the lookout for tech-savvy, creativity, and the ideal teammate to share a cyber-secure sanctuary amidst the Robotic Uprising!

Is that the essence of collaboration, or just the electric buzz of rogue robots? Our contestants are wired to show they've got the anti-bot brilliance to be the optimal bunker collaborator!

From code-cracking to EMP devices, tech survival will be put under the microscope. Personal traits will be decoded, and hidden agendas debugged, as our local prepper hunts for a fellow resistor to share oil cans and tales from the time before the Machines!

So arm your anti-virus and plug in! The robotic uprising may be underway, but the energy is just surging here on 'Bunker Sweet Bunker!'`
;
      default:
        return 'Welcome to the bunker dating game!';
    }
  };

  return (
    <div>
      <h1>Host View</h1>
      <button onClick={rollForIntroduction}>Roll for Introduction Speech</button>
      <p>{introductionRoll ? getIntroductionText() : 'Introduction speech will be displayed here after rolling.'}</p>
      <h2>Contestant Introduction Questions</h2>
      {seekers.map((seeker, index) => (
        <PlayerIntroduction key={index} player={seeker} />
      ))}
      <CommercialBreak />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default HostView;