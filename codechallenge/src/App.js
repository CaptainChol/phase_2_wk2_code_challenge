import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8004/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bot data:', error));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeFromService = (botId) => {
  fetch(`http://localhost:8004/bots/${botId}`, { method: 'DELETE' })
    .then(() => {
      setArmy(army.filter((b) => b.id !== botId));
      setBots(bots.filter((b) => b.id !== botId));
    })
    .catch((error) => console.error('Error discharging bot:', error));
};

  const handleSort = (sortType) => {
    if (sortType) {
      const sortedBots = [...bots].sort((a, b) => b[sortType] - a[sortType]);
      setBots(sortedBots);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Bot Management</h1>
      <div className="app-content">
        <SortBar onSort={handleSort}/>
        <div className='bot-collection'>
        <BotCollection bots={bots} addToArmy={addToArmy} releaseFromArmy={releaseFromArmy} dischargeFromService={dischargeFromService} />
        </div>
        <YourBotArmy army={army} releaseFromArmy={releaseFromArmy} dischargeFromService={dischargeFromService} />
      </div>
    </div>
  );
};

export default App;


