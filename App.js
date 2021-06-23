import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert, Button, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <Button
          color={"red"}
          title="Click Me"
          onPress={() => Alert.alert("My Title", "My Message", [
            {text: "Yes", onPress: () => console.log("Yes")},
            {text: "No", onPress: () => console.log("No")}
          ])}

      />
{/*      <Button
        color={'dodgerblue'}
        title={"Click Me Instead if you are on iOS"}
        onPress={() => Alert.prompt("My Title", "My message")} />
        Te example above only works on iOS and displays an alert box with text input
        */}
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
