import React from "react";

function SortBar({ handleSort }) {
  return (
    <div className="ui segment">
      <label>Sort By:</label>
      <div className="ui buttons">
        <button className="ui button" onClick={() => handleSort("health")}>
          Health
        </button>
        <button className="ui button" onClick={() => handleSort("damage")}>
          Damage
        </button>
        <button className="ui button" onClick={() => handleSort("armor")}>
          Armor
        </button>
      </div>
    </div>
  );
}

export default SortBar;
