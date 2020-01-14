import React from 'react';
import Navbar from '../layout/navigation/NavBar'
import MainHeader from '../layout/header/Header'
import EventDashBoard from '../features/event/EventDashBoard/EventDashBoard'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainHeader />
      <EventDashBoard />
    </div>
  );
}

export default App;
