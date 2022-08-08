import { View } from "react-native"
import Swiper from 'react-native-swiper'
/**
 * 简单的轮播组件
 */


export default function SimpleSwiperView (props) {
  /**
   * 初始化静态资源
   */
  let assetFileUriList = []
  props.assets.map((asset) => {
    assetFileUriList.push(AssetUtil.assetFileUri(asset.assetUuid, asset.ext))
  })
  let uri = useAssets([assetFileUriList])
  // uri 是所有图片的本地路径
  uri
  return (
    <View></View>
  )
}