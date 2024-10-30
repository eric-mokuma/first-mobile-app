import { useState, useEffect } from 'react'

export const useGameBoard = () => {
  const [board, setBoard] = useState(initialBoard())
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [winner, setWinner] = useState(null)
  const [scores, setScores] = useState([0, 0])

  const resetGame = () => {
    setBoard(initialBoard())
    setCurrentPlayer(0)
    setIsGameFinished(false)
    setWinner(null)
  }

  const checkForPlayerWin = () => {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        const value = board[row][col].value
        if (value) {
          if (
            col + 3 < board[row].length &&
            value === board[row][col + 1].value &&
            value === board[row][col + 2].value &&
            value === board[row][col + 3].value
          ) {
            if (!isGameFinished) {
              setWinner(value)
              setIsGameFinished(true)
              updateScore(value)
            }
            return
          }
          if (
            row + 3 < board.length &&
            value === board[row + 1][col].value &&
            value === board[row + 2][col].value &&
            value === board[row + 3][col].value
          ) {
            if (!isGameFinished) {
              setWinner(value)
              setIsGameFinished(true)
              updateScore(value)
            }
            return
          }
          if (
            row + 3 < board.length &&
            col + 3 < board[row].length &&
            value === board[row + 1][col + 1].value &&
            value === board[row + 2][col + 2].value &&
            value === board[row + 3][col + 3].value
          ) {
            if (!isGameFinished) {
              setWinner(value)
              setIsGameFinished(true)
              updateScore(value)
            }
            return
          }
          if (
            row + 3 < board.length &&
            col - 3 >= 0 &&
            value === board[row + 1][col - 1].value &&
            value === board[row + 2][col - 2].value &&
            value === board[row + 3][col - 3].value
          ) {
            if (!isGameFinished) {
              setWinner(value)
              setIsGameFinished(true)
              updateScore(value)
            }
            return
          }
        }
      }
    }
  }

  useEffect(() => {
    checkForPlayerWin()
    if (winner) {
      const timer = setTimeout(() => {
        resetGame()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [board, winner])

  const handleChipClick = (colIndex) => {
    if (isGameFinished) return

    const newBoard = [...board]
    for (let row = board.length - 1; row >= 0; row--) {
      if (!newBoard[row][colIndex].value) {
        newBoard[row][colIndex] = {
          value: currentPlayer === 0 ? 'red' : 'yellow',
        }
        setBoard(newBoard)
        setCurrentPlayer((prev) => (prev + 1) % 2)
        break
      }
    }
  }

  const updateScore = (winnerValue) => {
    setScores((prevScores) => {
      const newScores = [...prevScores]
      const playerIndex = winnerValue === 'red' ? 0 : 1 // Assuming 'red' is Player 1 and 'yellow' is Player 2
      newScores[playerIndex] += 1 // Increment the score for the winning player
      return newScores
    })
  }

  return {
    board,
    currentPlayer,
    isGameFinished,
    winner,
    handleChipClick,
    resetGame,
    scores,
  }
}

const initialBoard = () => {
  return Array(6)
    .fill(null)
    .map(() => Array(7).fill({ value: null }))
    .map((row) => row.map(() => ({ value: null })))
}
