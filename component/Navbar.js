import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default app=()=>{
   return(<View style={styles.navbar}>
    <Text style={styles.text}>TO-DO</Text>

   </View>) ;
}
const styles=StyleSheet.create({
    navbar:{
        backgroundColor:"blue",
        fontWeight:30,
        Colors:"white",
        marginTop:25,
        height:50,
    },
    text:{
        alignItems:'center',
        marginLeft:100,
        marginTop:20,
        color:'white'
    }
})