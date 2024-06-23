import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TextInput } from 'react-native';

// Get the width of the screen
const { width } = Dimensions.get('window');

// Dummy data for the horizontal lists and categories
const DATA = Array.from({ length: 10 }, (_, i) => ({ id: i.toString() }));
const CATEGORIES = [
  { title: 'ROMANTIC', color: '#FF6347' }, // Tomato
  { title: 'SCI-FI', color: '#4682B4' }, // SteelBlue
  { title: 'NOSTALGIC', color: '#8A2BE2' }, // BlueViolet
  { title: 'FANTASY', color: '#7FFF00' }, // Chartreuse
  { title: 'HOLLYWOOD', color: '#FFD700' }, // Gold
  { title: 'MORE GENRES', color: '#FF69B4' } // HotPink
];

// Component for each item in the horizontal lists
const Item = () => (
  <View style={styles.item} />
);

// Define the type for the props of the HorizontalList component
type HorizontalListProps = {
  title: string;
};

// Horizontal list component
const HorizontalList: React.FC<HorizontalListProps> = ({ title }) => (
  <View style={styles.horizontalListContainer}>
    <Text style={styles.listTitle}>{title}</Text>
    <FlatList
      data={DATA}
      renderItem={Item}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

// Define the type for the props of the CategoryTile component
type CategoryTileProps = {
  title: string;
  color: string;
};

// Component for each category tile
const CategoryTile: React.FC<CategoryTileProps> = ({ title, color }) => (
  <View style={[styles.categoryTile, { backgroundColor: color }]}>
    <Text style={styles.categoryTitle}>{title}</Text>
  </View>
);

// This is the ExploreScreen component
const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Top section with gray background */}
        <View style={styles.topSection}>
          <Text style={styles.exploreTitle}>EXPLORE</Text>
          <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#ccc" />
        </View>

        {/* Categories section */}
        <View style={styles.categoriesContainer}>
          {CATEGORIES.map((category, index) => (
            <CategoryTile key={index} title={category.title} color={category.color} />
          ))}
        </View>

        {/* Horizontal lists */}
        <HorizontalList title="YOUR RECENTS" />
        <HorizontalList title="TRENDING" />
        <HorizontalList title="OUR PICKS FOR YOU" />
      </ScrollView>
    </SafeAreaView>
  );
};

// Define styles for the ExploreScreen component
const styles = StyleSheet.create({
  // Style for the container (SafeAreaView)
  container: {
    flex: 1, // Flex 1 means the component will take up the full screen
    backgroundColor: '#000', // Background color of the screen (black)
  },
  // Style for the top section
  topSection: {
    height: 250, // Fixed height of 250 px
    width: width, // Full width of the screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray', // Background color of the top section
  },
  exploreTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  // Style for the categories container
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  categoryTile: {
    width: width / 3,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
    borderRadius: 10, // Add rounded corners to items
  },
});

// Export the ExploreScreen component so it can be used in other parts of the app
export default ExploreScreen;
