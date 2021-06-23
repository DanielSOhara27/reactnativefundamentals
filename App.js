import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <Button
          color={"red"}
          title="Click Me" onPress={() => console.log("Button Tapped")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
