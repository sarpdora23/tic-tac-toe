import { useState } from "react"

const initalGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

let res = [false];
export default function GameBoard({changeTurn,activeTurn,finishGame}){
    const[gameBoard,updateGameBoard] = useState(initalGameBoard)
    
    function checkWinCondition(updateBoard){
        const sym = activeTurn
        let flag = false
        const winCondition = [
                {
                    "row_i0":0,"col_i0":0,
                    "row_i1":0,"col_i1":1,
                    "row_i2":0,"col_i2":2
                },
                {
                    "row_i0":0,"col_i0":0,
                    "row_i1":1,"col_i1":0,
                    "row_i2":2,"col_i2":0
                },
                {
                    "row_i0":0,"col_i0":0,
                    "row_i1":1,"col_i1":1,
                    "row_i2":2,"col_i2":2
                },
                {
                    "row_i0":0,"col_i0":1,
                    "row_i1":1,"col_i1":1,
                    "row_i2":2,"col_i2":1
                },
                {
                    "row_i0":0,"col_i0":2,
                    "row_i1":1,"col_i1":2,
                    "row_i2":2,"col_i2":2
                },
                {
                    "row_i0":1,"col_i0":0,
                    "row_i1":1,"col_i1":1,
                    "row_i2":1,"col_i2":2
                },
                {
                    "row_i0":2,"col_i0":0,
                    "row_i1":2,"col_i1":1,
                    "row_i2":2,"col_i2":2
                },
                {
                    "row_i0":0,"col_i0":2,
                    "row_i1":1,"col_i1":1,
                    "row_i2":2,"col_i2":0
                }
            ]
               
        winCondition.forEach(winCon => {
            //console.log(`${updateBoard[winCon.row_i0][winCon.col_i0]} ${updateBoard[winCon.row_i1][winCon.col_i1]} ${updateBoard[winCon.row_i2][winCon.col_i2]}`)
            if ((updateBoard[winCon.row_i0][winCon.col_i0] == activeTurn && updateBoard[winCon.row_i1][winCon.col_i1] == activeTurn) && updateBoard[winCon.row_i2][winCon.col_i2] == activeTurn) {
                flag = true
                console.log(winCon)
            }
        });
        return [flag,sym];
    }
    function checkDrawCondition(updatedBoard){
        let flag = true
        for(const row of updatedBoard){
            console.log(row)
            for(const col of row){
                console.log(col)
                if(col == null){
                    flag = false
                    break;
                }
            }
            if(!flag){
                break
            }
        }
        console.log(flag)
        return [flag,null]
    }

    function handleBoardUpdate(rowIndex,colIndex){
        
        if(gameBoard[rowIndex][colIndex] == null){
            updateGameBoard((prevState)=>{
                const updateState = [...prevState.map((st)=>[...st])]
                updateState[rowIndex][colIndex] = activeTurn
                res = checkWinCondition(updateState)
                if(!res[0]){
                  res =  checkDrawCondition(updateState)
                  console.log(res)
                }
                return updateState
            })
           changeTurn(rowIndex,colIndex)
        }
        
    }
    if(res[0]){
        finishGame(res[1])
    }
    
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=>(
                <ol key={rowIndex}>
                    {row.map((col,colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={()=>{handleBoardUpdate(rowIndex,colIndex)}}>{col}</button>
                        </li>
                    ))}
                </ol>
            ))}
        </ol>
    )
}