import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botCollection, addToArmy }) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Map through botCollection and render each BotCard */}
        {botCollection.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleClick={() => addToArmy(bot)} />
          ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
