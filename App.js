import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Demo from './src/components/Demo';
import Termostat from './src/components/Termostat';
import User from './User';
// import {NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// const AuthStack = createStackNavigator()

// import {Home, Profil} from './Screens'
const phrase = 'Boyer'

function lol ()
{
  return 'D\'accord '
}



function Message({title})
{
  return ( <Text>Hello Julien { phrase} {title} {lol()} ^^</Text>)
}

const Welcome = ({name}) =>  <Text>Hello, {name} !! </Text>


export default function App ()
{
  // etat local du composant App et une variable age
  const [age, setAge] = useState(30)
  
  const modifAge = () =>
  {
    const increase = age + 1
    setAge(increase)
  }
  
  return (
     <Demo></Demo>
 
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  txt: {
    color: "pink",
    fontSize: 22
  }
});
