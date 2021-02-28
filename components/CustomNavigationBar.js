import { Appbar } from 'react-native-paper';
import React from 'react';

export default function CustomNavigationBar({ navigation, previous, scene }) {
    const { options } = scene.descriptor;

    return (
        <Appbar.Header>
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title={options.title} subtitle={options.subtitle ? options.subtitle : null}/>
        </Appbar.Header>
    );
}