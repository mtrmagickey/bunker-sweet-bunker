import React from 'react';
import { Link } from 'react-router-dom';
import bunkerLogo from '../assets/bunker-logo.png';
import '../TitleCard.css';
import Footer from './Footer';

const backgrounds = [
  require('../assets/muted-matte-industrial-0-mtrmkLatent.jpg'),
  require('../assets/muted-matte-industrial-1-mtrmkLatent.jpg'),
  require('../assets/muted-matte-industrial-2-mtrmkLatent.jpg'),
  require('../assets/muted-matte-industrial-3-mtrmkLatent.jpg'),
  require('../assets/muted-matte-industrial-4-mtrmkLatent.jpg'),
  require('../assets/muted-matte-industrial-5-mtrmkLatent.jpg'),
];

const TitleCard = () => {
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return (
    <div className="title-card-container" style={{ backgroundImage: `url(${randomBackground})` }}>
      <div className="text-container">

      <br></br> <h1>The end is near and you’re all alone...</h1>
      <h3>Ladies and Gentlemen, Love is in the air!, or that might just be the radiation? On tonight’s show, this local Prepper will be accepting one of you into this fine mid-century fallout shelter to be locked away safely for the foreseeable future!</h3>
      <h2>Now, Let’s meet our contestants (and Host)</h2>
      <img src={bunkerLogo} alt="Bunker Sweet Bunker" className="logo" />
      <h3>Bunker Sweet Bunker is a role-playing game about companionship at the end of the world. The most important aspects of the game are character-building, role-play, and fun. One player must play as the Well-prepared Bunker Owner and at least two players must participate as the Bunker-seekers. Additional players can play the part of host, Bunker-seeker, or  studio audience member. </h3>
      <Link to="/host">
        <button>Host</button>
      </Link>
      <Link to="/prepper">
        <button>Prepper</button>
      </Link>
      <Link to="/seeker">
        <button>Seeker</button>
      </Link>
    </div>
      <Footer />
    </div>
  );
}

export default TitleCard;
