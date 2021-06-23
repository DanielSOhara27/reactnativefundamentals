import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <Text >Hello React Native</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
