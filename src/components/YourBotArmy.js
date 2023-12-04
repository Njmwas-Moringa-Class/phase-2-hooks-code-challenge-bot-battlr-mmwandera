import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({selectedBots, releaseFromArmy, dischargeFromService}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/* Map through selectedBots and render each BotCard */}
          {selectedBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={() => releaseFromArmy(bot)}
              discharge={() => dischargeFromService(bot.id)}
            />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
