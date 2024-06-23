import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Dimensions, ScrollView } from 'react-native';

// Get the width of the screen
const { width } = Dimensions.get('window');

// Dummy data for the horizontal lists
const RECENT_DATA = Array.from({ length: 6 }, (_, i) => ({ id: i.toString(), text: i === 0 ? 'TEST' : '' }));
const OTHER_DATA = Array.from({ length: 6 }, (_, i) => ({ id: i.toString() }));

// Define the type for the props of the Item component
type ItemProps = {
  text?: string;
};

// Component for each item in the horizontal lists
const Item: React.FC<ItemProps> = ({ text }) => (
  <View style={styles.item}>
    {text ? <Text style={styles.itemText}>{text}</Text> : null}
  </View>
);

// Define the type for the props of the HorizontalList component
type HorizontalListProps = {
  title: string;
  data: Array<{ id: string; text?: string }>;
};

// Horizontal list component
const HorizontalList: React.FC<HorizontalListProps> = ({ title, data }) => (
  <View style={styles.horizontalListContainer}>
    <Text style={styles.listTitle}>{title}</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => <Item text={item.text} />}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

// This is the HomeScreen component
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Wrap the entire content in a ScrollView to enable vertical scrolling */}
      <ScrollView>
        {/* Top section with gray background */}
        <View style={styles.topSection} />

        {/* Horizontal lists */}
        <HorizontalList title="YOUR RECENTS" data={RECENT_DATA} />
        <HorizontalList title="TRENDING" data={OTHER_DATA} />
        <HorizontalList title="TOP PICKS FOR YOU" data={OTHER_DATA} />
        <HorizontalList title="ALL TIME BESTS" data={OTHER_DATA} />
        <HorizontalList title="NEW RELEASES" data={OTHER_DATA} />
      </ScrollView>
    </SafeAreaView>
  );
};

// Define styles for the HomeScreen component
const styles = StyleSheet.create({
  // Style for the container (SafeAreaView)
  container: {
    flex: 1, // Flex 1 means the component will take up the full screen
    backgroundColor: '#000000', // Background color of the screen (light blue)
  },
  // Style for the top section
  topSection: {
    height: 350, // Fixed height of 350 px
    width: width, // Full width of the screen
    backgroundColor: 'gray', // Background color of the top section
  },
  // Style for the horizontal list container
  horizontalListContainer: {
    marginVertical: 10, // Reduced margin to decrease space between rows
  },
  // Style for the list title
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    color: 'white', // Changed text color to white
  },
  // Style for each item in the horizontal list
  item: {
    width: 100,
    height: 150,
    backgroundColor: 'darkgray',
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Style for the item text
  itemText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// Export the HomeScreen component so it can be used in other parts of the app
export default HomeScreen;
