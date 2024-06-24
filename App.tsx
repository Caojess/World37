import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import CharacterPortalScreen from './src/screens/CharacterPortalScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import WebGLScreen from './src/screens/WebGLScreen';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="WebGL" component={WebGLScreen} />
  </Stack.Navigator>
);

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ headerShown: false }}  // Disable header for HomeStack
        />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Character Portal" component={CharacterPortalScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
