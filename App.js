import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import ForgetPassword from './app/screens/ForgetPassword';
const Stack = createNativeStackNavigator();
 
 const App = () => {
  
 
   return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
   );
 };
 export default App;