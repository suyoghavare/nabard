// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Make sure the path is correct
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';
import InformationScreen from './screens/InformationScreen';
import LoansScreen from './screens/LoanScreen';
import ViewPoliciesScreen from './screens/PolicyScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Ease-Pay" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="Loans" component={LoansScreen} />
        <Stack.Screen name="Policies" component={ViewPoliciesScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
