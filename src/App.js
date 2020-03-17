import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddReminder from './containers/AddReminder';
import LocalReminders from './containers/LocalReminders';
import OnlineReminders from './containers/OnlineReminders';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" style={{ height: '100px' }} />
        <h2>Reminder App Using React Hooks</h2>
        <div className="reminder-app">
          <AddReminder />
          <LocalReminders />
        </div>
        <div className="online-reminder-app">
          <OnlineReminders />
        </div>
    </div>
  );
}

export default App;
