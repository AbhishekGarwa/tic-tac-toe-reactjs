import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function handleIsEditing(){
    setIsEditing((editing) => !editing);
    if(isEditing){
        onChangeName(symbol, playerName)
    }
  }
  return (
    <li className={isActive ? 'active' : undefined} >
      <span className="player">
        {isEditing ? <input type="text" required value={playerName} onChange={(event)=>setPlayerName(event.target.value)} /> : <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEditing}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
