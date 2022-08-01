import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, StyleSheet, Text, View } from 'react-native';
import ExpoThreeTest from './pages/test/ExpoThreeTest'
import { Dimensions } from 'react-native'
import ThreeFiber from  "./pages/test/ThreeFiber"


export default function App() {
  const isDarkMode = useColorScheme() === 'dark'
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
        <ThreeFiber></ThreeFiber>
        {/* <ExpoThreeTest isDarkMode={isDarkMode}></ExpoThreeTest> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}