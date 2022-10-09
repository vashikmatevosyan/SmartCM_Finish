import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CheckSvg(props) {
    return (
        <Svg
            width={65}
            height={66}
            viewBox="0 0 65 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M55 .363H10a10.01 10.01 0 00-10 10v45a10.01 10.01 0 0010 10h45a10.01 10.01 0 0010-10v-45a10.011 10.011 0 00-10-10zM49.414 21.97l-21 25a2.5 2.5 0 01-1.875.892h-.042a2.501 2.501 0 01-1.858-.828l-9-10a2.5 2.5 0 113.716-3.343l7.076 7.862 19.155-22.798a2.5 2.5 0 013.828 3.215z"
                fill="#347474"
            />
        </Svg>
    )
}
export default CheckSvg