import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, StatusBar} from 'react-native'
import { TextInput, Button } from 'react-native-paper';

export default function LoginForm() {
    const correoInput = useRef(null);
    const passwordInput = useRef(null);

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
                onSubmitEditing={() => { passwordInput.current.focus(); }}               
            />

            <TextInput 
                style={styles.input}
                secureTextEntry
                returnKeyType="go"
                label="Contraseña" 
                ref={passwordInput} 
            />

            <TouchableOpacity style={styles.buttonContainer}>
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