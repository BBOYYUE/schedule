import { useCallback } from 'react';
import { useSelector } from 'react-redux'
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';


export default function Loadding (props) {
  let isLoad = useSelector(state => state.loadding.value)
  const onLayoutRootView = useCallback(async () => {
    if (isLoad) {
      await SplashScreen.preventAutoHideAsync();
    } else {
      await SplashScreen.hideAsync();
    }
  }, [isLoad]);
  return <View onLayout={onLayoutRootView}></View>
}