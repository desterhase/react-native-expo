import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ColorBox;

function ColorBox({ color, text }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
