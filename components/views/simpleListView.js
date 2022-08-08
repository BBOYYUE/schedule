/**
 * 简单的页面组件
 */
import { ScrollView, View, Text } from "react-native"

export default function SimplePageView (props) {

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Text>123123</Text>
      </View>
      <View>
        <Text>234234</Text>
      </View>
    </ScrollView>
  )
}