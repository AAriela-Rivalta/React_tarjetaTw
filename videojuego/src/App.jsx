import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./componentes/Square.jsx"
import { TURNS } from "./Constantes.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from './componentes/WinnerModal.jsx'



function App() { /*estado inicial*/
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
    }
  )
const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
}) /*Esta para saber de quien es el turno
comienza el turno la 'x'*/

/*para ver cuando gana alguien hacemos un estado
null: no hay ganador - false:hay un empate*/
const [winner, setWinner] = useState(null)


const resetGame = () => { /*para comenzar de nuevo el juego como al principio*/
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)

  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')

}


/*aca actualizamos el BOARD, renderizamos? lo que vemos antes*/
const updateBoard= (index) => {
  //para no actulizar esta posicion si ya tiene algo o
  //si alguien ya gano
  if(board[index] || winner) return

    //actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //guardar partida para no perderla al recargar
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    //revisamos si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate 
    }
  }


 return (
 <main className="board">
  <h1>Tic tac toe</h1>
  <button onClick={resetGame}>Reset del juego</button>
  <section className="game">
    {
      board.map((square, index) => {
        return (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
              {square}
            </Square>
        )
      })
    } 
  </section>
  <section className="turn">
    <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
      </Square>
  </section>

  <WinnerModal resetGame={resetGame} winner={winner} />  
  
 </main>
 )
}

export default App
