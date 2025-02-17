// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the LoginScreen
import LoginScreen from './SRC/Screens/RegisterScreen';  // Adjust the path as necessary
import RegisterScreen from './SRC/Screens/RegisterScreen';

// Create the stack navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* Define the LoginScreen as the first screen in the stack */}
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
