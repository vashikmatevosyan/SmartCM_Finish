import * as React from "react"
import Svg, { Path } from "react-native-svg"
import size from "../../utils/Size";

function LeftSvg(props) {
    return (
        <Svg
            width={size.size10}
            height={size.size17}
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9.707.596c.298.292.325.75.082 1.072l-.082.092L2.98 8.355l6.727 6.595c.298.292.325.75.082 1.072l-.082.092a.852.852 0 01-1.093.08l-.094-.08-7.321-7.177a.811.811 0 01-.081-1.071l.081-.093L8.519.596a.852.852 0 011.188 0z"
                fill="#347474"
            />
        </Svg>
    )
}

export default LeftSvg
