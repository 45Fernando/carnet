import React, {Fragment} from 'react';
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';


export default function Beneficiarios({ navigation }) {
    const _goBack = () => navigation.navigate('Home');

    return(        
        <Fragment>
            <ScrollView>
                <Button  style={styles.boton} icon="card-account-details-outline" mode="contained" onPress={() => navigation.navigate('Carnet')}>
                    Fernando Orquera
                </Button>
                <Button  style={styles.boton} icon="card-account-details-outline" mode="contained" onPress={() => navigation.navigate('Carnet')}>
                    Fernando Orquera
                </Button>
                <Button  style={styles.boton} icon="card-account-details-outline" mode="contained" onPress={() => navigation.navigate('Carnet')}>
                    Fernando Orquera
                </Button>
                <Button  style={styles.boton} icon="card-account-details-outline" mode="contained" onPress={() => navigation.navigate('Carnet')}>
                    Fernando Orquera
                </Button>
            </ScrollView>
        </Fragment>        
    );
}

const styles = StyleSheet.create({
    boton: {
        width: '90%',
        marginTop: 50, 
        alignSelf: 'center',
        borderRadius: 20,
    }
});