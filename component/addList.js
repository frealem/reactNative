import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default AddList=({buttonHandler})=>{

    const [text,setText]=useState('');

    const changeHandler=(val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='type to add...'
                onChangeText={changeHandler}
            />
            <Button
                style={styles.button}
                onPress={()=>buttonHandler(text)}
                title='ADD Task'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    input:{
      marginLeft:30,
      marginRight:30,
      marginTop:10,
      borderRadius:8,
      backgroundColor:'gray'
    },
    button:{
        Color:'red',
        borderRadius:8,
        width:70,
        height:40,
        marginLeft:60,
        
    }
  });