import Svg, { Path } from 'react-native-svg'

export default (props) => (
<Svg
  xmlns="http://www.w3.org/2000/svg"
  width={props.size}
  height={props.size}
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 24 24"
>
  <Path
    fill={props.fill}
    stroke={props.stroke}
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="m16 5l3 3l-2 1l4 4l-3 1l4 4h-9m2 3v-3m-7-5l-2-2m2 1l2-2M8 21V8m-2.176 7.995a3 3 0 0 1-2.743-3.69a2.998 2.998 0 0 1 .304-4.833A3 3 0 0 1 8 3.765a3 3 0 0 1 4.614 3.707a2.997 2.997 0 0 1 .305 4.833A3 3 0 0 1 10 16H6z"
  />
</Svg>
)