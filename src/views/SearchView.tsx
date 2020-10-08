import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
// Custom component imports
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import NothingHere from '../components/NothingHere';
import { SearchBox } from '../components/Elements';
// Styles
import generalStyles from '../assets/styles/styles';
// SVG
import SearchLogo from '../assets/svg/undraw_file_searching_duff.svg';
// Mock data
import { events } from '../helpers/mockdata';

const SearchView = () => {
  return (
    <SafeAreaView style={[generalStyles.container]}>
      <Header title="Buscar eventos" />
      <SearchBox search={() => {}} />
      {events.length < 0 ? (
        <FlatList
          data={events}
          renderItem={({ item }) => <EventCard event={item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <NothingHere
          mainMessage=""
          message={
            '¡Empieza a buscar tu evento preferido!\nIntenta usar palabras clave.'
          }
          Image={SearchLogo}
          imageSize={200}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchView;
