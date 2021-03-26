import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Termostat from './src/components/Termostat';

import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store';


// import {NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// const AuthStack = createStackNavigator()



const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default function App ()
{
  // etat local du composant App et une variable age
  return (
    <Provider store={store}>
        <Termostat></Termostat>
      </Provider>
    //  rendre nos données d’app disponibles aux composants
    // <Provider store={store}>
      /* Intercepte les modifications faites sur ce store Redux pour les enregistrer de manière persistante dans la mémoire du téléphone de l’utilisateur */
      // 
        
      // </PersistGate>
    // </Provider>
 
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
