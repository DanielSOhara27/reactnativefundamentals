import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.container, containerStyle]}>Hello React Native</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { width:200, height: 200, backgroundColor: "dodgerblue"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
