import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Host from './pages/HostView';
import Prepper from './pages/PrepperView';
import Seeker from './pages/SeekerView';
import TitleCard from './pages/TitleCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitleCard />} exact />
        <Route path="/home" element={<Home />} />
        <Route path="/host" element={<Host />} />
        <Route path="/prepper" element={<Prepper />} />
        <Route path="/seeker" element={<Seeker />} />
      </Routes>
    </Router>
  );
}

export default App;
