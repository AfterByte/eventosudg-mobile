import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
// Custom component imports
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import EventCard from '../components/EventCard';
// Styles imports
import generalStyles from '../assets/styles/styles';
// Mock data
import { categories, events } from '../helpers/mockdata';

const ComposedHeader = () => {
  return (
    <View>
      <Text style={styles.text}>Categorías</Text>
      <FlatList
        style={styles.categories}
        data={categories}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryCard name={item.name} image={item.image} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <Text style={styles.text}>Eventos</Text>
    </View>
  );
};

const UpcomingEventsView = () => {
  return (
    <SafeAreaView style={[generalStyles.container]}>
      <Header title={'Próximos eventos'} />
      <FlatList
        data={events}
        ListHeaderComponent={ComposedHeader}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default UpcomingEventsView;

const styles = StyleSheet.create({
  categories: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#445068',
    fontWeight: 'bold',
    margin: 10,
    marginTop: 20,
  },
});
