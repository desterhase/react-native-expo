import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

export default App;

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.header}>
        Here are some boxes of different colors
      </Text>

      <ColorBox text="text1" color="#2aa198" />
      <ColorBox text="text2" color="#268bd2" />
      <ColorBox text="text3" color="#d33682" />
      <ColorBox text="text4" color="#cb5b16" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // shared
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  safeArea: {
    flex: 1,
    justifyContent: 'center',
  },
});
