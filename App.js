import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text >Hello React Native
        {/*<Image source={require('./assets/icon.png')}></Image> This is how you link a static image from your assets folder*/}
      </Text>
      <Image
          fadeDuration={1000} /*Only works on Android*/
          source={{
        width:200,
        height:200,
        uri:"https://picsum.photos/200"}}>
        {/*In React Native, network images need to have their dimensions specified or they will not be rendered*/}
      </Image>
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
