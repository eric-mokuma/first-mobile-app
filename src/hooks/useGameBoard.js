import { useState } from 'react'
import { generateBoard, checkForPlayerWin } from '../utils/gameUtils'

export function useGameBoard() {
  const [board, setBoard] = useState(generateBoard())
  const [currentPlayer, setCurrentPlayer] = useState('red')
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [winner, setWinner] = useState(null)

  const handleChipClick = (colIndex) => {
    if (isGameFinished) return

    const newBoard = [...board]
    for (let row = newBoard.length - 1; row >= 0; row--) {
      if (!newBoard[row][colIndex].value) {
        newBoard[row][colIndex].value = currentPlayer
        break
      }
    }

    const winningPlayer = checkForPlayerWin(newBoard)
    if (winningPlayer) {
      setIsGameFinished(true)
      setWinner(winningPlayer)
    } else {
      setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red')
    }

    setBoard(newBoard)
  }

  const restartGame = () => {
    setBoard(generateBoard())
    setCurrentPlayer('red')
    setIsGameFinished(false)
    setWinner(null)
  }

  return {
    board,
    currentPlayer,
    isGameFinished,
    winner,
    handleChipClick,
    restartGame,
  }
}
