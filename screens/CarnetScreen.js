import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Carnet({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient colors={['#8a831c', '#8c8733', '#a8a348']} style={styles.carnet}>
        <View style={styles.carnet_logo}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image 
              style={styles.thumbnail}
              source={require('../images/logo.jpg')}/>
          </View>
          
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image 
              style={styles.foto}
              source={require('../images/foto.jpg')}/>  
          </View>                              
        </View>

        <View style={styles.carnet_info}>
          <View style={styles.carnet_nombre}>            
            <Text style={{fontWeight: 'bold', fontSize: 20}}>FERNANDO EXEQUIEL ORQUERA</Text>
          </View>
        </View>

        <View style={styles.carnet_numero}>          
          <Text style={{fontWeight: 'bold', fontSize: 20}}>35106814</Text>
        </View>

        <View style={styles.carnet_info}>
          <View style={styles.carnet_valido}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>AFILIADO ACTIVO</Text>
          </View>
        </View>
        

      </LinearGradient>     

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
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 28,
  },
  carnet_logo: {    
    flexDirection: 'row',
  },
  carnet_numero: {
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  carnet_info: {
    justifyContent: 'space-between',
    fontSize: 25,
    marginTop: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 20,
  }
});