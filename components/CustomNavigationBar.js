import { Appbar } from 'react-native-paper';
import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext'

export default function CustomNavigationBar({ navigation, previous, scene }) {
    const { options } = scene.descriptor;

    const { signOut } = useContext(AuthContext); 

    return (
        <Appbar.Header>            
            {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={options.title} subtitle={options.subtitle ? options.subtitle : null}/>
            <Appbar.Action icon="logout" onPress={() => signOut()} />
        </Appbar.Header>
    );
}