/**
 * 简单的页面组件
 */
import { View } from "react-native"
import SimpleFixedView from "./simpleFixedView";
import SimpleSwiperView from "./simpleSwiperView";

export default function SimplePageView (props) {

  return (
    <View>
      <View style={{ position: 'absolute', top: 0, left: 0 }}>
        <SimpleFixedView></SimpleFixedView>
      </View>
      <View style={{ position: 'absolute', top: 0, left: 0 }}>
        <SimpleSwiperView></SimpleSwiperView>
      </View>
    </View>
  )
}