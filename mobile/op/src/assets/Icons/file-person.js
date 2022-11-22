import Svg, { Path } from "react-native-svg";
import stylesVar from "../../styles/stylesVar";

export default (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="currentColor"
    class="bi bi-file-person"
    viewBox="0 0 16 16"
  >
    <Path 
      fill={stylesVar.icon.color}
      d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
    <Path 
      fill={stylesVar.icon.color}
      d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </Svg>
);
