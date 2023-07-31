import React, { useState } from 'react';

const BotCollection = ({ bots, addToArmy, releaseFromArmy, dischargeFromService }) => {
  const [filterByClass, setFilterByClass] = useState('');

  const handleFilterChange = (event) => {
    const selectedClass = event.target.value;
    setFilterByClass(selectedClass);
  };
  const filteredBots = filterByClass ? bots.filter((bot) => bot.bot_class === filterByClass) : bots;
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="filter-bar">
        <label htmlFor="filter">Filter By Class:</label>
        <select id="filter" value={filterByClass} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </div>
      {filteredBots.map((bot) => (
        <div className="bot-card" key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>Name: {bot.name}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => addToArmy(bot)}>Add to Army</button>
          <button onClick={() => releaseFromArmy(bot)}>Release</button>
          <button onClick={() => dischargeFromService(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;