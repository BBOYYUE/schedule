import * as React from 'react';
import { WebView } from 'react-native-webview';
import { Dimensions } from 'react-native'


windowWidth = Dimensions.get('window').width

windowHeight = Dimensions.get('window').height
export default function WebViewTest () {
  return (
    <WebView
      style={{ width: windowWidth, height: windowHeight }}
      source={{ uri: 'https://webvr.alphavisual.cn/djlyca/#/webvr/c649ed23-d466-4975-a926-905a8a86634c' }}
    />
  );
}