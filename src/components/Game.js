import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useGameBoard } from '../hooks/useGameBoard'
import PlayerTurn from './PlayerTurn'
import Button from './Button'

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

  const handleRestartGame = () => {
    restartGame()
  }

  const handleLeaveGame = () => {
    navigation.navigate('Home')
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
      {isGameFinished && (
        <Button onPress={handleRestartGame}>Restart Game</Button>
      )}
      <Button onPress={handleLeaveGame}>Leave Game</Button>
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
})
