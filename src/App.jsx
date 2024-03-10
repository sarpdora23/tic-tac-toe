import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver"
import Log from "./components/Log"
import Player from "./components/Player"
import { useState } from "react"

const player1_data = {
  "player_name":"Player 1",
  "player_symbol": "X"
}

const player2_data = {
  "player_name":"Player 2",
  "player_symbol": "O"
}
let winner = ""
function App() {
  const[activePlayer,changeActivePlayer] = useState(player1_data.player_symbol)
  const[playerLog,updateLog] = useState([])
  const[isFinished,setFinish] = useState(false)

  function changeTurn(row_i,col_i){
      changeActivePlayer((old_turn)=>{
        const newTurn = old_turn == player1_data.player_symbol ? player2_data.player_symbol: player1_data.player_symbol;
        addLog({
          "player":getPlayerFromSymbol(old_turn),
          "row_i":row_i,
          "col_i":col_i
        })
        return newTurn;
      })
  }
  function addLog(logData){
    updateLog((oldLog)=>{
      const newLog = [logData,...oldLog]
      
      return newLog
    })
  }
  function getPlayerFromSymbol(symbol){
    return symbol == player1_data.player_symbol ? player1_data.player_name : player2_data.player_name
  }
  function finishGame(winner_player){
    if(winner_player == null){
      winner = null
    }
    else{
      winner = getPlayerFromSymbol(winner_player)
      console.log("GAME FINISHED " + winner)
    }
    setFinish(true)
  }
  function restartGame(){

  }
  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player player_data={player1_data} isActive={activePlayer == player1_data.player_symbol}/>
        <Player player_data={player2_data} symbol={player2_data.player_symbol} isActive={activePlayer == player2_data.player_symbol}/>
      </ol>
      {isFinished && (<GameOver restart={restartGame} state={winner}></GameOver>)}
      <GameBoard finishGame={finishGame} changeTurn={changeTurn} activeTurn={activePlayer}/>
      </div>
      <Log turns={playerLog}/>
    </main>
  )
}

export default App
