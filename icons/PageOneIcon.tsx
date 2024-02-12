import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function PageOneIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 18 18"
      width={props.size}
      height={props.size}
    >
      <Path
        d="M5 9H13H19M5 15H19"
        fill="none"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        
      />
    </Svg>
  )
}

export default PageOneIcon