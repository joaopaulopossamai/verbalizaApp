import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
     alignItems:'center',
     backgroundColor:'#FFFACD',
     height:'100%',
     width:'100%'
    },
    textHome:{
     marginTop:'30%',
     fontSize:50,
     color:'#636363',
     transform:[{rotate: '-35deg'}],
     color:'#f4d3ff',
    },
    apresentacao:{
        marginTop:200,
        fontSize:30,
        marginLeft:30,
        
    },
    buttonHome:{
        marginTop:'50%',
        width:'55%',
        height: 50,
        backgroundColor:'#FFE4C4',
        borderRadius:50,
        alignItems:'center',
        borderWidth:2
    },

    textButton:{
        fontSize:25,
        marginTop:5,
        fontWeight:'500',
        
    }

});

export default styles