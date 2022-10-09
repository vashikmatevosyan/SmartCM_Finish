import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function PointSvg(props) {
  return (
    <Svg
      width={8}
      height={9}
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect y={0.457153} width={8} height={8} rx={4} fill="#347474" />
    </Svg>
  )
}

export default PointSvg
