import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, useColorScheme, StyleSheet, Text, View, Button } from 'react-native';
import ExpoThreeTest from './pages/test/ExpoThreeTest'
import { Dimensions, Animated } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';
import WebViewTest from './pages/test/ExpoWebViewTest';
// import ExpoThreeOrbitTest from "./pages/test/ExpoThreeOrbitTest"
import store from './store'
import { Provider, useDispatch } from 'react-redux'
import Loadding from './pages/loadding';
import { simpleUpdate, isFirstTime, markSuccess, isRolledBack } from 'react-native-update';
import _updateConfig from './update.json';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from "@rneui/themed";
/**
 * 这里的 appKey 是为了实现热更新
 */
const { appKey } = _updateConfig[Platform.OS];
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
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
      {/* <SafeAreaView style={backgroundStyle} > */}
      <StatusBar style={'auto'} translucent={true} />
      {/* <ExpoThreeTest></ExpoThreeTest> */}
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" >
          {/* <Stack.Navigator initialRouteName="Home" > */}
          <Tab.Screen name="Home" options={{
            title: "日程列表",
            headerStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            tabBarIcon: ({ color }) => (
              <Icon
                color={color} size={26}
                name='rowing' />
            ),
            tabBarStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            headerTintColor: isDarkMode ? 'white' : 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            {(props) => {
              return <View {...props} style={
                { backgroundColor: isDarkMode ? 'black' : 'white', flex: 1 }
              }>
                <Text>首页</Text>
              </View>
            }}
          </Tab.Screen>
          <Tab.Screen name="a" options={{
            title: "页面a",
            headerStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            tabBarIcon: ({ color }) => (
              <Icon
                color={color} size={26}
                name='rowing' />
            ),
            tabBarStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            headerTintColor: isDarkMode ? 'white' : 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            {(props) => {
              return <View {...props} style={
                { backgroundColor: isDarkMode ? 'black' : 'white', flex: 1 }
              }>
                <Text>页面a</Text>
              </View>
            }}
          </Tab.Screen>
          <Tab.Screen name="b" options={{
            title: "页面b",
            headerStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            tabBarIcon: ({ color }) => (
              <Icon
                color={color} size={26}
                name='rowing' />
            ),
            tabBarStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            headerTintColor: isDarkMode ? 'white' : 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            {(props) => {
              return <View {...props} style={
                { backgroundColor: isDarkMode ? 'black' : 'white', flex: 1 }
              }>
                <Text>页面b</Text>
              </View>
            }}
          </Tab.Screen>
          <Tab.Screen name="c" options={{
            title: "页面c",
            headerStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            tabBarIcon: ({ color }) => (
              <Icon
                color={color} size={26}
                name='rowing' />
            ),
            tabBarStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            headerTintColor: isDarkMode ? 'white' : 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            {(props) => {
              return <View {...props} style={
                { backgroundColor: isDarkMode ? 'black' : 'white', flex: 1 }
              }>
                <Text>页面c</Text>
              </View>
            }}
          </Tab.Screen>
          {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        > */}
          {/* <ExpoThreeTest isDarkMode={isDarkMode}></ExpoThreeTest> */}
          {/* <ExpoThreeOrbitTest ></ExpoThreeOrbitTest> */}
          {/* </ScrollView> */}
          {/* </Stack.Navigator> */}
        </Tab.Navigator>
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </Provider >
  );
}

export default simpleUpdate(App, { appKey });

