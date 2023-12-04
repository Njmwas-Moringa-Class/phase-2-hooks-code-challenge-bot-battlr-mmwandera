import React, { useState } from "react";
import BotCard from "./BotCard";
import SortBar from "./SortBar";

function BotCollection({ botCollection, addToArmy, releaseFromArmy }) {
  const [sortedBots, setSortedBots] = useState([...botCollection]);

  const handleSort = (criteria) => {
    const sorted = [...botCollection].sort((a, b) => b[criteria] - a[criteria]);
    setSortedBots(sorted);
  };

  return (
    <div>
      <SortBar handleSort={handleSort} />
      <div className="ui four column grid">
        <div className="row">
          {sortedBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={() => addToArmy(bot)}
              showDetails={() => console.log("Implement show details here")} 
            />
          ))}
          Collection of all bots
        </div>
      </div>
    </div>
  );
}

export default BotCollection;

