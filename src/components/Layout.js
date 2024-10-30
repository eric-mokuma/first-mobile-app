import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from './Header'
import { useGameBoard } from '../hooks/useGameBoard'

export default function Layout({ children }) {
  const { isGameFinished, winner } = useGameBoard()

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>CONNECT FOUR</Text>
      <View style={styles.content}>
        {isGameFinished && (
          <View style={styles.winMessage}>
            <Text style={styles.winText}>
              {winner ? `${winner} wins!` : 'It is a draw!'}
            </Text>
          </View>
        )}
      </View>
      {children}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Content Here</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winMessage: {
    marginBottom: 20,
  },
  winText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
})
