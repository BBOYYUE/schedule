import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { Dimensions, Animated, useColorScheme } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';
import store from './store'
import { Provider, useDispatch } from 'react-redux'
import Loadding from './pages/loadding';
import { simpleUpdate, isFirstTime, markSuccess, isRolledBack } from 'react-native-update';
import _updateConfig from './update.json';
import DrawerNavigationTest from "./pages/test/DrawerNavigationTest"
/**
 * 这里的 appKey 是为了实现热更新
 */
const { appKey } = _updateConfig[Platform.OS];

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
      <StatusBar style={'auto'} translucent={true} />
      <DrawerNavigationTest></DrawerNavigationTest>
    </Provider >
  );
}
export default simpleUpdate(App, { appKey });

