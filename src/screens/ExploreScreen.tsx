import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from 'react-native';

// Get the width of the screen
const { width } = Dimensions.get('window');

// This is the ExploreScreen component
const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top section with gray background */}
      <View style={styles.topSection}></View>
      {/* Text component to display the "Explore" text */}
      <Text style={styles.text}>Explore</Text>
    </SafeAreaView>
  );
};

// Define styles for the ExploreScreen component
const styles = StyleSheet.create({
  // Style for the container (SafeAreaView)
  container: {
    flex: 1, // Flex 1 means the component will take up the full screen
    alignItems: 'center', // Centers the children (Text) horizontally
    backgroundColor: '#ADD8E6', // Background color of the screen (light blue)
  },
  // Style for the top section
  topSection: {
    height: 250, // Fixed height of 250 px
    width: width, // Full width of the screen
    backgroundColor: 'gray', // Background color of the top section
  },
  // Style for the text
  text: {
    fontSize: 24, // Font size of the text
    color: '#000080', // Text color (navy blue)
    marginTop: 20, // Margin top to add some space below the top section
  },
});

// Export the ExploreScreen component so it can be used in other parts of the app
export default ExploreScreen;
