import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default Lists=({item,pressHandler})=>{
return(<View><TouchableOpacity onPress={()=>pressHandler(item.key)}>
    <Text style={styles.text}>{item.text}</Text></TouchableOpacity>
    </View>)}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    text:{
      marginLeft:20,
      marginRight:20,
      marginTop:8,
      backgroundColor:'yellow',
      height:60,
      borderRadius:10,

      
    }
  });