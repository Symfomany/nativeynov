import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';




export default function Demo ()
{
    
    const [photos, setPhotos] = useState( [] )
        
    useEffect( () =>
    {
        
        const load = async () =>
        {
            const res = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json()
            setPhotos(res)
        }
        load()
    } )
    
    const filterPhoto = () => photos.splice(10)
    return (
    <ScrollView><View style={styles.container}>
        {filterPhoto().map( ( photo, index ) => { return ( index < 3 && <Image key={photo.id} style={styles.image} source={{ uri: photo.thumbnailUrl }} /> ) }
        )}     
    </View></ScrollView>
       )
}


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    
    // backgroundColor: '#fff',
    // justifyContent: 'flex-start',
    alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 5
    },
});

