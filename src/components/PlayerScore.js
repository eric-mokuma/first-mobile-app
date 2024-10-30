import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const PlayerScore = ({ playerNames, scores }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>
        {playerNames[0]}: {scores[0]}
      </Text>
      <Text style={styles.scoreText}>
        {playerNames[1]}: {scores[1]}
      </Text>
    </View>
  )
}

PlayerScore.propTypes = {
  playerNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default PlayerScore
