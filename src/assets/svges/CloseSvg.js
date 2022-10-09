import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CloseSvg(props) {
    return (
        <Svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8.884 8.391l6.933-6.964a.63.63 0 000-.888.623.623 0 00-.884 0L8 7.504 1.067.539a.623.623 0 00-.884 0 .63.63 0 000 .888l6.933 6.964-6.933 6.965a.63.63 0 00.442 1.072c.16 0 .32-.062.442-.184L8 9.279l6.933 6.965a.622.622 0 00.884 0 .63.63 0 000-.888L8.884 8.39z"
                fill="#787878"
            />
        </Svg>
    )
}

export default CloseSvg