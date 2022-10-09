import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowSvg(props) {
    return (
        <Svg
            width={11}
            height={7}
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M5.578 6.423l-5.196-6h10.392l-5.196 6z" fill="#F7F7F7" />
        </Svg>
    )
}

export default ArrowSvg