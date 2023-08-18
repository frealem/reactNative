import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard, Alert } from 'react-native';
import Navbar from './component/Navbar';
import Lists from './component/list';
import AddList from './component/addList';
export default function App() {
  const[todo,setTodo]=useState([
    {text:'study',key:'1'},
    {text:'code',key:'2'},
    {text:'sleep',key:'3'},
    {text:'design',key:'4'},
  ]);
  const pressHandler=(key)=>{
    setTodo((prev)=>{
      return prev.filter(todo=>todo.key!=key);})
  }
  const buttonHandler=(text)=>{
    if(text>4){
setTodo((prev)=>{
  return[
    {text:text,key:Math.random().toString()},
    ...prev
  ]
})
  }
else{
  Alert.alert('Incorrect','Enter word greater than 3 letters')
}}
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
    
    <View style={styles.container}>
   <View><Navbar /></View><View style={styles.body}>
   <View><AddList buttonHandler={buttonHandler}/></View>
   <View style={styles.list}><FlatList
    data={todo}
    renderItem={({item})=>(<Lists item={item} pressHandler={pressHandler}/>)}
   /></View></View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text:{
    marginLeft:30,
    marginTop:10,
    backgroundColor:'#333'
  },
});
