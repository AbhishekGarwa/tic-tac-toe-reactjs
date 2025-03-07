import { useState } from "react";



export default function GameBoard({onSquareSelect, gameBoard}) {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> onSquareSelect(rowIndex, colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
