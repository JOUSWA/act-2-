// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import RegistrationPage from './screens/RegistrationPage';
import AccountRecoveryPage from './screens/AccountRecoveryPage';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="Recovery" component={AccountRecoveryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
