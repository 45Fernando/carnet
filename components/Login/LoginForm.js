import React, { useRef, useState, useContext} from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/AuthContext'

export default function LoginForm() {
    const correoInput = useRef(null);
    const passwordInput = useRef(null);

    const [correo, onChangeCorreo] = useState("");
    const [password, onChangePassword] = useState("");

    const { signIn } = useContext(AuthContext);
    
    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('currentUser', jsonValue)
        } catch (e) {
            console.log('Hubo un problema al guardar en AsyncStorage: ' + e.message);
        }
      }

    const ingresar = () => {
        if (correo != "" && password != "") {
            signIn({ correo, password });      
        }
        //TODO Controlar los diferentes casos de si los campos estan vacios.
    }

    return(
        <View style={styles.container}>            
            <TextInput
                style={styles.input}
                returnKeyType="next"
                label="Correo electronico" 
                ref={correoInput}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit={false}
                value={correo}
                onChangeText={correo => onChangeCorreo(correo)}                
                onSubmitEditing={() => { passwordInput.current.focus(); }}               
            />

            <TextInput 
                style={styles.input}
                secureTextEntry
                returnKeyType="go"
                label="Contraseña"
                value={password}
                onChangeText={password => onChangePassword(password)}  
                ref={passwordInput} 
            />

            <TouchableOpacity onPress={ingresar} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>INGRESAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 60,
        marginBottom: 15        
    },
    buttonContainer: {
       backgroundColor: "#FEFAE0",
       paddingVertical: 10 
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "700"
    }
});