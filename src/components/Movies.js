
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMovies,
  addMovies
} from '../../store/movies';

export function Movies ()
{
  // useSelector => getter
  const listmovies = useSelector( selectMovies );
  const dispatch = useDispatch();

    return (
        <View>
            <Button onPress={() => dispatch( addMovies('Le Seigneur des Agneaux') )} title="Add a Movie !!" />
        <Text>{listmovies.map( ( e ) => `${ e } ,` )}</Text>
        </View>
    )
    
}
