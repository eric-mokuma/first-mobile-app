import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONNECT FOUR</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
})
