import React, {Fragment, useState, useEffect, useContext} from 'react';
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext'
import { Button } from 'react-native-paper';


export default function Beneficiarios({ navigation }) {
    const _goBack = () => navigation.navigate('Home'); 

    const { signOut, state } = useContext(AuthContext);  
    

    const [listaBeneficiarios, setListaBeneficiarios] = useState([]);      

    
    useEffect(() => {
        async function fetchData(){
            try{
                let response = await fetch ('http://192.168.1.8:4000/api/affiliates_covenants', {
                    method: 'GET',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + state.userToken,
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                });
                
                if (!response.ok) {
                    signOut();
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else{
                    let resData = response.json()
                    .then(usuarios => setListaBeneficiarios(usuarios.data));              
                }
            } catch(e) {
                console.log('Hubo un problema haciendo el fetch de los beneficiarios: ' + e.message);
            }
        }
        fetchData();  
    }, [signOut, state]);
    

    return(          
        <Fragment>
            <ScrollView>
                {listaBeneficiarios.map(beneficiario => (
                    <Button key={beneficiario.affiliate.id} style={styles.boton} icon="card-account-details-outline" mode="contained" onPress={() => navigation.navigate('Credencial', beneficiario)}>
                        {beneficiario.affiliate.name}
                    </Button> 
                ))}                   
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