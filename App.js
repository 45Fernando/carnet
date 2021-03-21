import 'react-native-gesture-handler';
import React, { useEffect, useReducer} from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomNavigationBar from "./components/CustomNavigationBar"
import { AuthContext } from './context/AuthContext'

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

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('currentUser', jsonValue)
  } catch (e) {
      console.log('Hubo un problema al guardar en AsyncStorage: ' + e.message);
  }
}

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('currentUser');
  } catch(e) {
      console.log('Hubo un problema al remover el usuario actual del AsyncStorage: ' + e.message);
  }

  console.log('Done.')
}   

const initialState = {
                      isLoading: true,
                      isSignout: false,
                      userToken: null
                     };

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
};

export default function App() {
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    async function currentToken() {
      try {
        const jsonValue = await AsyncStorage.getItem('currentUser');
        const user = JSON.parse(jsonValue); 

        if (jsonValue != null) {
          setState({ type: 'RESTORE_TOKEN', token: user.token });
        } else {
          setState({ type: 'SIGN_OUT', token: null });
        }        
      } catch(e) {
          console.log('Hubo un problema accediendo al usuario actual: ' + e.message);
      }
    }
    currentToken();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async ({correo, password}) => {
        try {
          let response = await fetch('http://192.168.1.11:4000/api/login', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-type': 'application/json'
              },
              body: JSON.stringify({
                  'correo': correo,
                  'password': password
              })

          });                
          
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
              
          } else {
              let resData = response.json()
              .then(user => {
                storeData(user.data);
                setState({ type: 'SIGN_IN', token: user.data.token })
              });              
          }
          
      }catch (e) {
          console.log('Hubo un problema con su operacion fetch: ' + e.message);
      }},
      signOut: () => {
        setState({ type: 'SIGN_OUT' });
        removeValue();
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        // AUN NO HAY UN METODO PARA CREAR UN USUARIO
        setToken({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      state: state
    }),
    [state]
  );

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
       <AuthContext.Provider value={authContext}>
          {state.userToken != null ? (
            <Stack.Navigator 
              initialRouteName= "Home" 
              screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />
              }}>                      
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'OSUNSa', subtitle: "Obra Social de la Universidad de Salta" }}/>
              <Stack.Screen name="Beneficiarios" component={BeneficiariosScreen} options={{ title: 'Beneficiarios'}}/>
              <Stack.Screen name="Carnet" component={CarnetScreen} options={{ title: 'Carnet'}} /> 
          </Stack.Navigator>
          ) :  (
            <Stack.Navigator 
              initialRouteName= "Login" 
              screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />
              }}> 
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: '', subtitle: "" }, {headerShown: false}}/> 
            </Stack.Navigator>
          )}
        </AuthContext.Provider>        
     </NavigationContainer>
    </PaperProvider>     
  );
}


