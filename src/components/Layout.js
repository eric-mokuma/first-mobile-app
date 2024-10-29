import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from './Header'
import PlayerScore from './PlayerScore'
import Board from './Board'
import Button from './Button'
import { useGameBoard } from '../hooks/useGameBoard'

export default function Layout({ children }) {
  const {
    board,
    currentPlayer,
    isGameFinished,
    winner,
    handleChipClick,
    restartGame,
  } = useGameBoard()

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {isGameFinished && (
          <View style={styles.winMessage}>
            <Text style={styles.winText}>
              {winner ? `${winner} wins!` : 'It is a draw!'}
            </Text>
          </View>
        )}
        <PlayerScore player="Player 1" score={0} color="red" />
        <Board board={board} onChipClick={handleChipClick} />
        <PlayerScore player="Player 2" score={0} color="yellow" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onClick={restartGame}>Restart</Button>
        <Button onClick={() => console.log('Leave Match')}>Leave Match</Button>
      </View>
      {children} {/* Render any child components passed to Layout */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winMessage: {
    marginBottom: 20,
  },
  winText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
})
