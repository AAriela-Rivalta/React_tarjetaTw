import { WINNER_COMBOS } from "../Constantes.js"

export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  /*revisamos si hay un empate,
  si no hay mas espacios vacios 
  en el tablero*/ 
  return newBoard.every((square) => square !== null)
  //verifica que todos los espacios (squate) sean distinto de null
}