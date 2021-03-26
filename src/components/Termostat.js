import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { Counter } from './Counter';
import axios from 'axios'

// Bonne pratique: créer les données à mapper dans le composant en props
// const mapStateToProps = state => ({
// 	titles: state.titles,
// } );

export default function Termostat ()
{
  const [temperature, setTemperature] = useState( 25 )
  const [climatisation, setClimatisation] = useState( false )
  const [forbidden, setForbidden] = useState( false )
  const [ville, setVille] = useState('lyon');
 
  const FadeInView = (props) =>
  {
  const fadeAnim = useRef( new Animated.Value( 0 ) ).current
    
    useEffect( () =>
    {
    
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [climatisation] )
    
    return (
      <Animated.View               
        style={{
          ...props.style,
          opacity: fadeAnim,      
        }}
      >
        {props.children}
      </Animated.View>
    );
    
  }

  useEffect( () =>
  {
    const load = async () =>
    {
      try
      {
        const res = await axios.get( `http://api.weatherapi.com/v1/current.json?key=d7a5fc2bd288493fa79123336212403&q=${ ville }&aqi=yes` )
        setTemperature(res.data.current.temp_c)
      } catch ( e )
      {
        console.log(e)
      }
       
    }
    
    load()
    
  }, [ville])
  
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
        {/* <Counter></Counter> */}
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={ville === "Marseille" ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setVille('Marseille')}
        />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={ville === "Paris"  ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setVille('Paris')}
        />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={ville === "Lyon"  ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setVille('Lyon')}
        />
        <Text>Ville: {ville}</Text>
        
        
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
        { climatisation && <FadeInView style={{ width: 250, height: 50, backgroundColor: "pink", padding: 10 }}>
          <Text>La climatisation est activée</Text></FadeInView>}
            {/* {forbidden ? <Text>Temperature interdite</Text> : <Text>Temperature autorisée</Text>} */}
        
        
    </View>
  );
    
}

// // connecter le composant aux state du Store
// export default connect(mapStateToProps)(Termostat);

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

