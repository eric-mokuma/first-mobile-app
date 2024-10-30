import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useGameBoard } from '../hooks/useGameBoard'
import PlayerTurn from './PlayerTurn'
import PlayerScore from './PlayerScore'
import Button from './Button'
import Footer from './Footer'

export default function Game({ route, navigation }) {
  const { playerNames } = route.params

  const {
    board,
    currentPlayer,
    handleChipClick,
    isGameFinished,
    winner,
    resetGame,
    scores,
  } = useGameBoard()

  const handleLeaveGame = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (isGameFinished) {
      const timer = setTimeout(() => {
        resetGame()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isGameFinished, resetGame])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect Four</Text>
      <PlayerTurn currentPlayer={currentPlayer} playerNames={playerNames} />
      <PlayerScore playerNames={playerNames} scores={scores} />
      {isGameFinished && (
        <Text style={styles.winMessage}>
          {winner
            ? `${playerNames[winner === 'red' ? 0 : 1]} wins!`
            : 'It is a draw!'}
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
                disabled={isGameFinished}
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
      <Button onPress={handleLeaveGame}>Leave Game</Button>
      <Footer />
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
})
