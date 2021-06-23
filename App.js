import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text component clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native - A really really long text. Now I wanna to write even more text to see what happens</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
