import { View } from "react-native"
export default function SimpleFixedView () {
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