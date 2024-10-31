import React, { useState } from 'react'
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native'
import Button from './Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Auth0 from 'react-native-auth0'

const auth0 = new Auth0({
  domain: 'mako-kotare-ericmokuma.au.auth0.com',
  clientId: 'qW9B7dg6gRoKX2wolhUufBTV4cmRn0M2',
})

export default function Home({ navigation }) {
  const [playerNames, setPlayerNames] = useState(Array(2).fill(''))

  const handleStartGame = () => {
    if (playerNames.every((name) => name.trim())) {
      navigation.navigate('Game', { playerNames })
    } else {
      Alert.alert('Please enter names for both players.')
    }
  }

  const handlePlayOnline = () => {
    console.log('Navigating to Play Online')
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  const handleLogin = async () => {
    try {
      const credentials = await auth0.auth.passwordRealm({
        username: 'user@example.com',
        password: 'password',
        realm: 'Username-Password-Authentication',
      })
      Alert.alert(
        'Login Successful',
        `Welcome! Your email: ${credentials.email}`
      )
    } catch (error) {
      Alert.alert('Login Failed', error.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePlayOnline}>
          <Text style={styles.link}>Play Online</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
      <Button onPress={handleStartGame}>Start Game</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 40,
  },
  link: {
    fontSize: 16,
    color: 'blue',
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
