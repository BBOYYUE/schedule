import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, StyleSheet, Text, View } from 'react-native';
import ExpoThreeTest from './pages/test/ExpoThreeTest'
import { Dimensions, Animated } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';
import WebViewTest from './pages/test/ExpoWebViewTest';
import store from './store'
import { Provider } from 'react-redux'
import Loadding from './pages/loadding';

export default function App () {

  const isDarkMode = useColorScheme() === 'dark'
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  };

  return (
    <Provider store={store}>
      <Loadding></Loadding>
      <SafeAreaView style={backgroundStyle} >
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        > */}
        <StatusBar style={'auto'} translucent={true} />
        <ExpoThreeTest isDarkMode={isDarkMode}></ExpoThreeTest>
        {/* </ScrollView> */}
      </SafeAreaView>
    </Provider >
  );
}

