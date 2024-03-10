export default function Log({turns}){
    return(
    <ol id="log">
        {turns.map((turn)=>(
            <li key={`${turn.player}${turn.row_i}${turn.col_i}`}>Player:{turn.player} Row:{turn.row_i} Column:{turn.col_i}</li>
        ))}
    </ol>
    )
}