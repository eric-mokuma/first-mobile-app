import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>Copyright 2024 E-Multimedia</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
})

export default Footer
