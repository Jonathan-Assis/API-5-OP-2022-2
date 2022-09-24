import Svg, { Path } from "react-native-svg";
import stylesVar from "../../styles/stylesVar";

export default (props) => (
<Svg
  xmlns="http://www.w3.org/2000/svg"
  width={props.size}
  height={props.size}
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 256 256"
>
  <Path
    fill={stylesVar.icon.color}
    d="M198.1 62.6a76 76 0 0 0-140.2 0A72.3 72.3 0 0 0 16 127.8c-.1 38.8 31.4 71.2 70.1 72.2a71.9 71.9 0 0 0 33.9-7.5V232a8 8 0 0 0 16 0v-39.5a72 72 0 0 0 32 7.5h1.9c38.7-1 70.2-33.4 70.1-72.2a72.3 72.3 0 0 0-41.9-65.2ZM169.5 184a56.2 56.2 0 0 1-32.6-9.4l-.9-.6v-41.1l43.6-21.7a8 8 0 0 0-7.2-14.4L136 115.1V88a8 8 0 0 0-16 0v51.1l-36.4-18.3a8 8 0 1 0-7.2 14.4l43.6 21.7V174l-.9.6a56.2 56.2 0 0 1-32.6 9.4c-30.1-.8-54.6-26-54.5-56.2a56.3 56.3 0 0 1 32.6-50.7a16.4 16.4 0 0 0 8.1-8.3a60 60 0 0 1 110.6 0a16.4 16.4 0 0 0 8.1 8.3a56.3 56.3 0 0 1 32.6 50.7c.1 30.2-24.4 55.4-54.5 56.2Z"
  />
</Svg>
)