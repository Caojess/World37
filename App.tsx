import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '/Users/jessicacao/World37/src/screens/HomeScreen.tsx';
import ExploreScreen from '/Users/jessicacao/World37/src/screens/ExploreScreen.tsx';
import CharacterPortalScreen from '/Users/jessicacao/World37/src/screens/CharacterPortalScreen.tsx';
import LibraryScreen from '/Users/jessicacao/World37/src/screens/LibraryScreen.tsx';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Main App component
const App = () => {
  return (
    // NavigationContainer manages the navigation tree
    <NavigationContainer>
      {/* Define the bottom tab navigator */}
      <Tab.Navigator>
        {/* Define the tabs */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Character Portal" component={CharacterPortalScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Export the App component as the default export
export default App;
