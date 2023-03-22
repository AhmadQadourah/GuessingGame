import React from 'react'
import { StyleSheet, Text } from 'react-native';

function InstructionText({children}) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: "#e2f41684",
    fontWeight: "bold",
    margin:15
  },
});