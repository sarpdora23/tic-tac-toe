import { useState } from "react"

export default function Player({player_data,isActive}){
    const [isEditing,setEditing] = useState(false);
    const [playerName,setPlayerName] = useState(player_data.player_name)
    function clickEdit(){
        setEditing((edit)=>!edit)
    }
    function handleInput(e){
        setPlayerName(e.target.value)
        player_data.player_name = playerName
    }
    return(
        <li className={isActive ? "active" : undefined}>
          <span className="player">
            {isEditing ? <input onChange={handleInput} required value={playerName} defaultValue={playerName}></input> : <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{player_data.player_symbol}</span>
          </span>
          <button onClick={clickEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}