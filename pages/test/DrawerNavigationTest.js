import React, { useEffect } from 'react';
import { Button, Text, View, useColorScheme } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from "@rneui/themed";
import ExpoThreeTest from './ExpoThreeTest';
const LeftDrawer = createDrawerNavigator();


function LeftDrawerScreen () {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: 'left' }}>
      <LeftDrawer.Screen name="Home" component={BottomTabScreen} />
      {/* <LeftDrawer.Screen name="Menu" component={TestOne} /> */}
    </LeftDrawer.Navigator>
  );
}

function TestA () {
  return <View><Text>123123</Text></View>
}

function TestB () {
  return <View><Text>234234</Text></View>
}
const Tab = createMaterialBottomTabNavigator();
function BottomTabScreen () {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          // if (route.name === 'Home') {
          //   iconName = focused
          //     ? 'fa-house'
          //     : 'fa-house';
          // } else if (route.name === 'Settings') {
          //   iconName = focused ? 'ios-list-box' : 'ios-list';
          // }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} type='font-awesome' />;
        },

        tabBarActiveTintColor: isDarkMode ? 'white' : 'black',
        tabBarInactiveTintColor: '#dfdfdf',

      })}
      barStyle={{
        backgroundColor: isDarkMode ? 'black' : 'white'
      }}
    >
      <Tab.Screen name="test-a" component={ExpoThreeTest} />
      <Tab.Screen name="test-b" component={TestB} />
    </Tab.Navigator>
  )
}


export default function DrawerNavigationTest () {
  return (
    <NavigationContainer>
      <LeftDrawerScreen />
    </NavigationContainer>
  );
}