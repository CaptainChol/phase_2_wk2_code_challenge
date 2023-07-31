import React from 'react';

const YourBotArmy = ({ army, releaseFromArmy, }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div className="bot-card" key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>Name: {bot.name}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => releaseFromArmy(bot)}>Release</button>
          
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;