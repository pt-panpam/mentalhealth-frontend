import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './SRC/Screens/HomeScreen'; // Path to HomeScreen
import CallHistoryScreen from './SRC/Screens/CallHistoryScreen'; // Path to CallHistoryScreen
import ChatHistoryScreen from './SRC/Screens/ChatHistoryScreen'; // Path to ChatHistoryScreen
import UserProfileScreen from './SRC/Screens/UserProfileScreen'; // Path to UserProfileScreen
import SettingsScreen from './SRC/Screens/SettingScreen'; // Path to SettingsScreen
import BottomTabBar from './SRC/Screens/BottomTabBar'; // Path to BottomTabBar

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{headerShown:false}} tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="CallHistory" component={CallHistoryScreen} />
        <Tab.Screen name="ChatHistory" component={ChatHistoryScreen} />
        <Tab.Screen name="UserProfile" component={UserProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
