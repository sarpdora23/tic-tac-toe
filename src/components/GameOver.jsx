export default function GameOver({state,restart}){
    return(
    <div id="game-over">
        <h2>Game Over!</h2>
        {state != null ? (<p>{state} win the game!!</p>) : (<p>Draw!</p>)}
        <button onClick={()=>{window.location.reload(false)}}>Rematch!</button>
    </div>
    )
}