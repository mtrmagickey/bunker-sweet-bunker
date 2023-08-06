import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Bunker Sweet Bunker!</h1>
            <p>Select your role:</p>
            <div className="button-container">
                <Link to="/host" className="role-button">Host</Link>
                <Link to="/prepper" className="role-button">Prepper</Link>
                <Link to="/seeker" className="role-button">Seeker</Link>
            </div>
        </div>
    );
}

export default Home;
