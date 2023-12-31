import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View ,Alert} from 'react-native';

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
                style={styles.btn}
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
    btn:{
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 5,
        margin: 10,
      },
  });