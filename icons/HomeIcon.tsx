import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function HomeIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 265.655 265.655"
      width={props.size}
      height={props.size}
    >
      <Path
      d="M252.938,0.003H132.822H12.717C5.695,0.003,0,5.697,0,12.714v120.111v120.116
      c0,7.022,5.695,12.711,12.717,12.711h120.105h120.116c7.022,0,12.717-5.695,12.717-12.711V132.825V12.714
      C265.655,5.697,259.96,0.003,252.938,0.003z M240.233,120.114h-94.694V25.425h94.694V120.114z M25.422,25.425h94.694v94.683H25.422
      V25.425z M25.422,145.536h94.694v94.694H25.422V145.536z M240.233,240.23h-94.694v-94.694h94.694V240.23z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  )
}

export default HomeIcon