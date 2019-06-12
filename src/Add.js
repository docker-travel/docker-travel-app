import React from "react" ;
import Svg ,{
Path
} from 'react-native-svg' ;


const Add = props => (
< Svg width = { props . width || 512 } height = { props . height || 512 } viewBox = "0 0 512 512" >
< Path fill = { props . color || '#ccc' } d = "M416 277.67V96h42.666v138.667H416v42.666z" ></ Path >
</ Svg >
);

export default Add ;
