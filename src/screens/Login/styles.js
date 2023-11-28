import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import { StyleSheet } from "react-native";


const ButtonVerde = styled(TouchableOpacity)`
background-color: #DDA0DD;
width:60%;
height: 7%;
border-radius: 30px;
align-items: center;
align-self: center;
margin-top: 80%;
`;




export const styles = StyleSheet.create({
container:{
    alignItems:'center',
    backgroundColor:'#f4d3ff',
    width:'100%',
    height:'100%'

},

textLogin:{
   
marginTop:'70%',
fontSize:35,
color:'#636363',
transform:[{rotate: '-35deg'}],

},

textButton:{
fontSize:25,
marginTop:10,
color:'#FF4500',
fontWeight:'500'


},

});


export default ButtonVerde
