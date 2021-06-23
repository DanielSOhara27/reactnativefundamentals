import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text >Hello React Native
        {/*<Image source={require('./assets/icon.png')}></Image> This is how you link a static image from your assets folder*/}
      </Text>
        <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
            {/*The Native Feedback component is only available on Android*/}
            <View style={ {width: 200, height: 200, backgroundColor: "dodgerblue"}}>
                {/*Example of component designed for TouchableNativeFeedback only available on Android*/}
            </View>
        </TouchableNativeFeedback>
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
