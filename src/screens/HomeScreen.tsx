import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types'; // Adjust the import path as necessary

const { width } = Dimensions.get('window');

const RECENT_DATA = Array.from({ length: 6 }, (_, i) => ({ id: i.toString(), text: i === 0 ? 'TEST' : '' }));
const OTHER_DATA = Array.from({ length: 6 }, (_, i) => ({ id: i.toString() }));

type ItemProps = {
  text?: string;
  onPress?: () => void;
};

const Item: React.FC<ItemProps> = ({ text, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    {text ? <Text style={styles.itemText}>{text}</Text> : null}
  </TouchableOpacity>
);

type HorizontalListProps = {
  title: string;
  data: Array<{ id: string; text?: string }>;
  onItemPress?: (text?: string) => void;
};

const HorizontalList: React.FC<HorizontalListProps> = ({ title, data, onItemPress }) => (
  <View style={styles.horizontalListContainer}>
    <Text style={styles.listTitle}>{title}</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => <Item text={item.text} onPress={() => onItemPress && onItemPress(item.text)} />}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleItemPress = (text?: string) => {
    if (text === 'TEST') {
      navigation.navigate('WebGL');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topSection} />

        <HorizontalList title="YOUR RECENTS" data={RECENT_DATA} onItemPress={handleItemPress} />
        <HorizontalList title="TRENDING" data={OTHER_DATA} onItemPress={handleItemPress} />
        <HorizontalList title="TOP PICKS FOR YOU" data={OTHER_DATA} onItemPress={handleItemPress} />
        <HorizontalList title="ALL TIME BESTS" data={OTHER_DATA} onItemPress={handleItemPress} />
        <HorizontalList title="NEW RELEASES" data={OTHER_DATA} onItemPress={handleItemPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  topSection: {
    height: 350,
    width: width,
    backgroundColor: 'gray',
  },
  horizontalListContainer: {
    marginVertical: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    color: 'white',
  },
  item: {
    width: 100,
    height: 150,
    backgroundColor: 'darkgray',
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
