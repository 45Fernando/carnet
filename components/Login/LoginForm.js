import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, StatusBar} from 'react-native'
import { TextInput, Button } from 'react-native-paper';

export default function LoginForm() {
    const correoInput = useRef(null);
    const passwordInput = useRef(null);

    const [correo, onChangeCorreo] = useState(null);
    const [password, onChangePassword] = useState(null);

    useEffect(() => {

    }, [])

    const ingresar = async () => {
        if (correo != "" && password != "") {
            await fetch('http://192.168.1.11:4000/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'correo': correo,
                    'password': password
                })

            }).then(response => {
                if (response.ok) {
                    response.json()
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            })                
            .then(resData => {
                alert(resData.message);
            })
            .catch(e => {
                console.log('Hubo un problema con su operacion fetch: ' + e.message);
              });
        }
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