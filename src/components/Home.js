import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'

export default function Home({ navigation }) {
  const [playerNames, setPlayerNames] = useState(Array(2).fill(''))

  const handleStartGame = () => {
    if (playerNames[0].trim() && playerNames[1].trim()) {
      navigation.navigate('Game', { playerNames })
    } else {
      Alert.alert('Please enter names for both players.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONNECT FOUR</Text>
      <Text>
        Welcome to Connect Four! Players take turns dropping colored discs into
        a grid.
      </Text>
      {playerNames.map((name, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Player ${index + 1}`}
          value={name}
          onChangeText={(text) => {
            const newNames = [...playerNames]
            newNames[index] = text
            setPlayerNames(newNames)
          }}
        />
      ))}
      <Button title="Start Game" onPress={handleStartGame} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
  },
})
