import React, { useState,useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
   const [botCollection, setBotCollection] = useState([]);
   const [selectedBots, setSelectedBots] = useState([]);

   useEffect(() => {
    // Fetch bot data from the server
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBotCollection(data))
  }, []);

function addToArmy(bot) {
  // Check if the bot is not already in the army
  if (!selectedBots.some(function(selectedBot) {
    return selectedBot.id === bot.id;
  })) {
    setSelectedBots(selectedBots.concat([bot]));
  }
}

function releaseFromArmy(botToRemove) {
  // Filter out the bot to be released from the army
  const updatedArmy = selectedBots.filter(function(bot) {
    return bot.id !== botToRemove.id;
  });
  setSelectedBots(updatedArmy);
}


  return (
    <div>
      {/* Pass the addToArmy function and selectedBots state to BotCollection */}
      <YourBotArmy selectedBots={selectedBots} releaseFromArmy={releaseFromArmy}/>
      <BotCollection botCollection={botCollection} addToArmy={addToArmy} releaseFromArmy={releaseFromArmy}/>
    </div>
  )
}

export default BotsPage;
