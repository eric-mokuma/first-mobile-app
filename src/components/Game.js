import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useGameBoard } from '../hooks/useGameBoard'
import PlayerTurn from './PlayerTurn'
import PlayerScore from './PlayerScore'

export default function Game({ route, navigation }) {
  const { playerNames } = route.params
  const {
    board,
    currentPlayer,
    handleChipClick,
    isGameFinished,
    winner,
    restartGame,
  } = useGameBoard()

  // Initialize scores for both players
  const [scores, setScores] = useState([0, 0])

  // Update scores when a player wins
  useEffect(() => {
    if (winner) {
      console.log(`Winner detected: ${winner}`) // Log when a winner is detected
      const updatedScores = [...scores]
      const playerIndex = playerNames.indexOf(winner)
      if (playerIndex !== -1) {
        updatedScores[playerIndex] += 1 // Increment the score for the winning player
        setScores(updatedScores) // Update the state with new scores
        console.log(`Updated Scores: ${updatedScores}`) // Log updated scores
      }
    }
  }, [winner, playerNames])

  const handleRestartGame = () => {
    restartGame()
  }

  const handleLeaveGame = () => {
    navigation.navigate('Home')
  }

  const handleGameEnd = (winningPlayer) => {
    console.log(`Winner: ${winningPlayer}`) // Log the winner
    setWinner(winningPlayer) // Set the winner
  }

  return (
    <View style={styles.container}>
      <PlayerTurn currentPlayer={currentPlayer} playerNames={playerNames} />
      {isGameFinished && (
        <Text style={styles.winMessage}>
          {winner ? `${winner} wins!` : 'It is a draw!'}
        </Text>
      )}
      <View style={styles.boardContainer}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((chip, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={styles.cell}
                onPress={() => handleChipClick(colIndex)}
              >
                <View
                  style={[
                    styles.chip,
                    { backgroundColor: chip.value || 'gray' },
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <PlayerScore player={playerNames[0]} score={scores[0]} color="red" />
      <PlayerScore player={playerNames[1]} score={scores[1]} color="yellow" />
      {isGameFinished && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.restartButton}
            onPress={handleRestartGame}
          >
            <Text style={styles.restartButtonText}>Restart Game</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.leaveButton}
            onPress={handleLeaveGame}
          >
            <Text style={styles.leaveButtonText}>Leave Game</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    width: 50,
    height: 50,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chip: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  winMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  restartButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  restartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  leaveButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  leaveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
