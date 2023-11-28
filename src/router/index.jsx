import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Translator from '../screens/Translator';
import Results from '../screens/Results';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name='Home' component={Home} />
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name='Translator' component={Translator} />
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name='Results' component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//options={{headerTransparent: true, headerShown: false}}
