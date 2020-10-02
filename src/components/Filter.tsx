import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// Custom component imports
import { Card } from './Elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Filter = {
  name: string;
  behaviour(): void | Promise<void>;
};

type FilterCategory = {
  name: string;
  filters: Filter[];
};

type FilterProps = {
  filterCategories?: FilterCategory[];
};

const Filters = ({
  filterCategories = [
    {
      name: 'Fecha',
      filters: [
        {
          name: 'Cercanos',
          behaviour: () => {
            console.warn('cercanos');
          },
        },
        { name: 'Lejanos', behaviour: () => {} },
      ],
    },
    {
      name: 'Cupo',
      filters: [
        { name: 'Más llenos', behaviour: () => {} },
        { name: 'Menos llenos', behaviour: () => {} },
      ],
    },
    {
      name: 'Disponibilidad',
      filters: [{ name: 'Pasados', behaviour: () => {} }],
    },
  ],
}: FilterProps) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>Filtros</Text>
      <FlatList
        data={filterCategories}
        numColumns={filterCategories.length}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text style={styles.filterTitle}>{item.name}</Text>
            {item.filters.map((filter) => (
              <TouchableOpacity
                style={styles.filter}
                onPress={() => {
                  filter.behaviour();
                }}>
                <Text style={styles.filterText}>{filter.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </Card>
  );
};

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <View style={{ flexDirection: 'row-reverse', marginTop: 8 }}>
      {showFilters ? <Filters /> : null}
      <TouchableOpacity
        onPress={() => {
          setShowFilters(!showFilters);
        }}>
        <Icon
          name="filter-variant"
          size={26}
          color={'#445068'}
          style={{ marginRight: 16, marginBottom: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Filter;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    marginTop: 30,
    marginRight: 16,
    paddingVertical: 8,
  },
  title: {
    color: '#63ACAA',
    fontWeight: 'bold',
    marginHorizontal: 8,
    borderBottomColor: '#C3C3C3',
    borderBottomWidth: 2,
  },
  category: {
    marginHorizontal: 8,
    alignItems: 'center',
  },
  filterTitle: { color: '#445068', fontWeight: 'bold' },
  filter: {
    backgroundColor: '#445068',
    padding: 3,
    borderRadius: 4,
    marginTop: 8,
  },
  filterText: { color: 'white' },
});
