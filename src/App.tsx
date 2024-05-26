import React, { Profiler } from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default App;

