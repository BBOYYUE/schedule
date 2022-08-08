
/**
 * 横屏容器
 */
export default function HorizontalScreenContainerView (props) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ImageBackground source={props.bgImage}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        }} >
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ position: 'relative', top: 0, left: 0, width: 2388 / 2, height: 1668 / 2 }}>
            {props.children}
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}