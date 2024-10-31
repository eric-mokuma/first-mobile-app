import React from 'react'
import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import Auth0 from 'react-native-auth0'

const auth0 = new Auth0({
  domain: 'mako-kotare-ericmokuma.au.auth0.com',
  clientId: 'qW9B7dg6gRoKX2wolhUufBTV4cmRn0M2',
})

export default function SignUp({ navigation }) {
  const handleSignUp = async () => {
    try {
      // Redirect to Auth0 Universal Login for sign-up
      await auth0.webAuth.authorize({
        scope: 'openid profile email',
        audience: 'https://connect4-api-endpoint/',
      })
      Alert.alert('Sign Up Successful', 'You have successfully signed up!')
      navigation.goBack()
    } catch (error) {
      Alert.alert('Sign Up Failed', error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Button title="Sign Up with Auth0" onPress={handleSignUp} />
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
    marginBottom: 20,
  },
})
