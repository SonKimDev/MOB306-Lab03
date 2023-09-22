import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import Bai34Screen from './screens/Bai34Screen';

const Stack = createNativeStackNavigator();
const SignIn = 'SignIn';
const Bai34 = 'Bai34';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SignIn} screenOptions={{headerShown: false}}>
        <Stack.Screen name={SignIn} component={SignInScreen} />
        <Stack.Screen name={Bai34} component={Bai34Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;