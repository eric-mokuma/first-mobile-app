import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button({ onClick, children }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
