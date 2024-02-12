import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function PageFourIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 512 351.67"
      width={props.size}
      height={props.size}
    >
      <Path
        d="M0 0h512v23.91H0V0zm0 327.76h512v23.91H0v-23.91zm0-163.88h512v23.91H0v-23.91z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  )
}

export default PageFourIcon