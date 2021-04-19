import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { IconButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';

export default function Credencial({route, navigation }) {
  const beneficiario = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient colors={['#83ba5d', '#50812f', '#2c4a18']} style={styles.credencial}>
        <View style={styles.credencial_logo}>
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

        <View style={styles.credencial_info}>
          <View style={styles.credencial_nombre}>            
            <Text style={{fontWeight: 'bold', fontSize: 14, color: "#FFF"}}>{beneficiario.affiliate.name}</Text>
          </View>
        </View>

        <View style={styles.credencial_numero}>          
          <Text style={{fontWeight: 'bold', fontSize: 14, color: "#FFF"}}>{beneficiario.affiliate.dni}</Text>
        </View>

        <View style={styles.credencial_info}>          
          <Text style={{fontWeight: 'bold', fontSize: 12, color: "#FFF"}}>{beneficiario.covenant.name}</Text>
        </View>

        <View style={styles.credencial_info}>
          <View style={styles.credencial_valido}>
            <Text style={{fontWeight: 'bold', fontSize: 12, color: "#FFF"}}>AFILIADO ACTIVO</Text>
          </View>
        </View>  
      </LinearGradient>     

      
      <View style={styles.credencial_regla}>
        <Text style={styles.credencial_regla}>
          Esta credencial es <Text style={{fontWeight: 'bold'}}>personal e instraferible</Text> para uso exclusivo del afiliado. Válido para realizar cualquier tramite relacionado a nuestra obra social.
        </Text>
      </View>

      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
            <Image 
              style={styles.qrcode}
              source={require('../images/qrcode.png')}/>  
      </View>

      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', marginTop: 40}}>
        <IconButton icon="facebook" size={40} color="#50812f" onPress={() => Linking.openURL('fb://page/144123352414772').catch(() => {
            Linking.openURL('https://www.facebook.com/osunsa1');
          })}>  
        </IconButton>
        
        <IconButton icon="youtube" size={40} color="#50812f" onPress={() =>  Linking.openURL('vnd.youtube://channel/UCKdsEWVIVHt2xpPUUkHJsZA').catch(() => {
            Linking.openURL('https://www.youtube.com/channel/UCKdsEWVIVHt2xpPUUkHJsZA');
          })}>
        </IconButton> 

        <IconButton icon="twitter" size={40} color="#50812f" onPress={() => Linking.openURL('twitter://user?screen_name=ObraSocialUNSA').catch(() => {
            Linking.openURL('https://www.twitter.com/ObraSocialUNSA');
          })}>
        </IconButton>    
      </View> 
    </ScrollView>    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  credencial: {
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    width: "95%",
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 28,
  },
  credencial_logo: {    
    flexDirection: 'row',
  },
  credencial_numero: {
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  credencial_info: {
    justifyContent: 'space-between',
    fontSize: 25,
    marginTop: 10,
  },
  credencial_regla: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    fontSize: 16,
    textAlign: 'center',
    color: '#000'
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  qrcode: {
    width: 160,
    height: 160,
    borderRadius: 0,
  }
});