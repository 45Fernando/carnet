import React, {Fragment} from 'react';
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';


export default function Home({ navigation }) {
    return(        
        <Fragment>
            <Button  style={styles.boton} icon="card-account-details-outline" mode="contained" onPress={() => navigation.navigate('Beneficiarios')}>
                Carnets
            </Button>
        </Fragment>        
    );
}

const styles = StyleSheet.create({
    boton: {
        width: '50%',
        marginTop: 100, 
        alignSelf: 'center',
        borderRadius: 20,
    }
});