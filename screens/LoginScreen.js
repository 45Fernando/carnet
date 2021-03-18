import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LoginForm from '../components/Login/LoginForm'

export default function Login() {    
    
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo} 
                    source={require('../assets/logo.jpg')}
                />

                <Text style={styles.title}>Obra Social de la Universidad de Salta</Text>
            </View>

            <View style={styles.formContainer}>
                <LoginForm />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8c8733"
    },
    logoContainer: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center"
    },
    logo: {
       width: 100,
       height: 100,
       borderRadius: 50
    },
    title: {
        color: "#FFF",
        marginTop: 10,
        textAlign: "center"
    }
});