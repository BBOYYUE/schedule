

/**
 * 竖屏方向的页面容器
 * 
 */
export default function VerticalScreenContainerView (props) {

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ImageBackground source={props.bgImage}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        }} >
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ position: 'relative', top: 0, left: 0, width: 750 / 2, height: 1334 / 2 }}>
            {props.children}
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}