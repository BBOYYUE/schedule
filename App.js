import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, StyleSheet, Text, View } from 'react-native';
import ExpoThreeTest from './pages/test/ExpoThreeTest'
import { Dimensions } from 'react-native'
import ThreeFiber from  "./pages/test/ThreeFiber"
import * as ScreenOrientation from 'expo-screen-orientation';



export default function App() {
  const isDarkMode = useColorScheme() === 'dark'
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  };
  return (
    <SafeAreaView style={backgroundStyle} >
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      > */}
        <StatusBar style={'auto'} translucent={true} />
        <ExpoThreeTest isDarkMode={isDarkMode}></ExpoThreeTest>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
