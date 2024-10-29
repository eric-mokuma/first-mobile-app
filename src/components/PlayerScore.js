import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function PlayerScore({ player, score, color }) {
  console.log(`Player: ${player}, Score: ${score}`) // Log player and score
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            color === 'red' ? 'rgb(253, 102, 135)' : 'rgb(255, 206, 103)',
        },
      ]}
    >
      <Text style={styles.playerName}>{player}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 16,
    color: 'white',
  },
})
