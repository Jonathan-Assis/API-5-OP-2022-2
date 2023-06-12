import Svg, { Path } from "react-native-svg"
import { StyledColors } from '../../styles'

export default (props) => (
<Svg
  xmlns="http://www.w3.org/2000/svg"
  width={props.size}
  height={props.size}
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 32 32"
>
  <Path
    fill={StyledColors.icon.White.color}
    d="M7.5 6A1.5 1.5 0 0 0 6 7.5H4A1.5 1.5 0 0 0 2.5 9v11A1.5 1.5 0 0 0 4 21.5h2V30h2v-8.5h16V30h2v-8.5h2a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 28 7.5h-2a1.5 1.5 0 0 0-3 0H9A1.5 1.5 0 0 0 7.5 6Zm-4 5.975L6.975 8.5h5.05L3.5 17.025v-5.05ZM4.975 20.5l12-12h5.05l-12 12h-5.05Zm22-12H28a.5.5 0 0 1 .5.5v3.025L20.025 20.5h-5.05l12-12Zm1.525 8.475V20a.5.5 0 0 1-.5.5h-3.025l3.525-3.525Z"
  />
</Svg>
)