import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
// Custom component imports
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import Filter from '../components/Filter';
import NothingHere from '../components/NothingHere';
// Styles
import generalStyles from '../assets/styles/styles';
// Mock data
import { events } from '../helpers/mockdata';

const YourEventsView = () => {
  return events.length > 0 ? (
    <SafeAreaView style={[generalStyles.container]}>
      <Header title="Tus eventos" />
      <Filter />
      <FlatList
        data={events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={generalStyles.container}>
      <Header title="Tus eventos" />
      <NothingHere message="Para crear un evento dirígite a la aplicación web." />
    </SafeAreaView>
  );
};

export default YourEventsView;
