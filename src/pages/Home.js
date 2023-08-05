import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Bunker Sweet Bunker</h1>
      <nav>
        <ul>
          <li><Link to="/host">Host View</Link></li>
          <li><Link to="/prepper">Prepper View</Link></li>
          <li><Link to="/seeker">Bunker Seeker View</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
