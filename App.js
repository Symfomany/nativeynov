import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Termostat from './src/components/Termostat';
import User from './User';

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
    <View style={styles.container}>
      <Text style={styles.txt}>Hello YNOV !! Web Mobile 🐪</Text>
      <Message title='Coucou petite perruche !' />
      <Welcome name="Sara" />
      <User age={age}></User>
      <Button title="Ajouter +1 à votre âge" onPress={() => modifAge()}></Button>
      <Termostat></Termostat>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: "pink",
    fontSize: 22
  }
});
