import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function PlayerTurn({ currentPlayer, playerNames }) {
  return (
    <View style={styles.container}>
      <Text style={styles.turnText}>
        {currentPlayer === 'red'
          ? `${playerNames[0]}'s turn`
          : `${playerNames[1]}'s turn`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  turnText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
