import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CustomNavigationBar from "./components/CustomNavigationBar"

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BeneficiariosScreen from './screens/BeneficiariosScreen';
import CarnetScreen from './screens/CarnetScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8c8733',
    accent: '#ffffff',
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>      
        <Stack.Navigator 
          initialRouteName="Login" 
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: '', subtitle: "" }, {headerShown: false}}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'OSUNSa', subtitle: "Obra Social de la Universidad de Salta" }}/>
          <Stack.Screen name="Beneficiarios" component={BeneficiariosScreen} options={{ title: 'Beneficiarios'}}/>
          <Stack.Screen name="Carnet" component={CarnetScreen} options={{ title: 'Carnet'}} />
        </Stack.Navigator>      
     </NavigationContainer>
    </PaperProvider>     
  );
}


