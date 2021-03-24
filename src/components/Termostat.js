import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Termostat ()
{
  
  const [temperature, setTemperature] = useState( 25 )
  const [climatisation, setClimatisation] = useState( false )
  const [forbidden, setForbidden] = useState( false )

  useEffect( () =>
  {
    if ( temperature < 14 || temperature > 28 )
    {
      setForbidden(true)
    } else
    {
      setForbidden(false)
    }
    
  }, [temperature])
    
  const increase = () => setTemperature(temperature + 1)
  const decrease = () => setTemperature(temperature - 1)
  const climatiser = () => { setTemperature( 16 ); setClimatisation(true) }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/meteo.png')}
                />
            <Button onPress={increase} title="+1"></Button>
        <Button onPress={decrease} title="-1"></Button>
        
        <Button onPress={() => setTemperature((temperature -32 ) / 1.8 )}  title="Conversion en F"></Button>
            <Text>Température: {temperature} </Text>
            {forbidden && <Text>Temperature interdite</Text>}
            <TouchableOpacity
              style={styles.button}
              onPress={climatiser}
            >
              <Text>Activer la clim</Text>
            </TouchableOpacity>
            { climatisation && <Text>La climatisation est activé</Text>}
            {/* {forbidden ? <Text>Temperature interdite</Text> : <Text>Temperature autorisée</Text>} */}
        
        
    </View>
  );
    
}


const styles = StyleSheet.create( {
  button: {
    width: 200,
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  tinyLogo: {
    width: 150,
    height: 150,    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

