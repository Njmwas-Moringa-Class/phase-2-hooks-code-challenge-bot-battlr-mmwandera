import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botCollection, setBotCollection] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    // Fetch bot data from the server
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBotCollection(data));
  }, []);

  function addToArmy(bot) {
    // Check if the bot is not already in the army
    if (!selectedBots.some((selectedBot) => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  }

  function releaseFromArmy(botToRemove) {
    // Filter out the bot to be released from the army
    const updatedArmy = selectedBots.filter((bot) => bot.id !== botToRemove.id);
    setSelectedBots(updatedArmy);
  }

  // Function to discharge a bot from both frontend and backend
  const dischargeFromService = (botId) => {
    // Remove bot from the frontend
    const updatedArmy = selectedBots.filter((bot) => bot.id !== botId);
    setSelectedBots(updatedArmy);

    // Remove bot from the backend
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete bot with ID ${botId}`);
        }
      })
      .catch((error) => {
        console.error("Error discharging bot:", error);
      });
  };

  return (
    <div>
      {/* Pass the addToArmy function and selectedBots state to BotCollection */}
      <YourBotArmy
        selectedBots={selectedBots}
        releaseFromArmy={releaseFromArmy}
        dischargeFromService={dischargeFromService}
      />
      <BotCollection
        botCollection={botCollection}
        addToArmy={addToArmy}
        releaseFromArmy={releaseFromArmy}
      />
    </div>
  );
}

export default BotsPage;
