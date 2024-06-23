import * as React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Dimensions, ScrollView } from 'react-native';

// Get the width of the screen
const { width } = Dimensions.get('window');

// Dummy data for the character blocks
const DATA = Array.from({ length: 9 }, (_, i) => ({ id: i.toString() })); // Reduced to 9 items for 3 rows

// Component for each character block
const CharacterBlock = () => (
  <View style={styles.block} />
);

// This is the CharacterPortalScreen component
const CharacterPortalScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Top section with gray background */}
        <View style={styles.topSection} />

        <FlatList
          data={DATA}
          renderItem={CharacterBlock}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
          scrollEnabled={false} // Disable scrolling in FlatList since ScrollView handles it
          contentContainerStyle={styles.listContent}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Define styles for the CharacterPortalScreen component
const styles = StyleSheet.create({
  // Style for the container (SafeAreaView)
  container: {
    flex: 1,
    backgroundColor: '#000', // Background color of the screen (black)
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  topSection: {
    height: 250, // Fixed height of 250 px
    width: width, // Full width of the screen
    backgroundColor: 'gray', // Background color of the top section
    marginBottom: 10,
  },
  // Style for each character block
  block: {
    width: 98,
    height: 128,
    backgroundColor: 'gray',
    margin: 15, // Adjust margin for spacing (38px total between blocks)
    borderRadius: 10,
  },
  // Style for the row
  row: {
    justifyContent: 'center', // Center the rows horizontally
  },
  // Style for the list content
  listContent: {
    alignItems: 'center',
  },
});

// Export the CharacterPortalScreen component so it can be used in other parts of the app
export default CharacterPortalScreen;
