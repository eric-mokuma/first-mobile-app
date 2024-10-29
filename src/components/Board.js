import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

export default function Board({ board, onChipClick }) {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((chip, colIndex) => (
            <TouchableOpacity
              key={colIndex}
              style={styles.cell}
              onPress={() => onChipClick(colIndex)}
            >
              <View
                style={[styles.chip, { backgroundColor: chip.value || 'gray' }]}
              />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    width: 50,
    height: 50,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chip: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
})
