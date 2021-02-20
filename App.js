import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.carnet}>
        <View style={styles.carnet_logo}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image 
              style={styles.thumbnail}
              source={require('./images/logo.jpg')}/>
          </View>
          
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image 
              style={styles.foto}
              source={require('./images/foto.jpg')}/>  
          </View>                              
        </View>


        <View style={styles.carnet_numero}>          
          <Text style={styles.carnet_numero}>35106814</Text>
        </View>

        <View style={styles.carnet_info}>
          <View style={styles.carnet_nombre}>            
            <Text>FERNANDO EXEQUIEL ORQUERA</Text>
          </View>
          <View style={styles.carnet_valido}>
            <Text>AFILIADO ACTIVO</Text>
          </View>
        </View>
      </View>     

    </ScrollView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carnet: {
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: '#7CBA3D',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  carnet_logo: {    
    flexDirection: 'row',
  },
  carnet_numero: {
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    fontSize: 45,
  },
  carnet_info: {
    justifyContent: 'space-between',
    fontFamily: 'sans-serif',
    fontSize: 25,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },
  foto: {
    width: 70,
    height: 70,
    borderRadius: 20,
  }
});
