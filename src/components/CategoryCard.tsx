import React from 'react';
import { Text, StyleSheet, ImageSourcePropType } from 'react-native';
// Custom components
import { Card } from './Elements';

type CategoryCardProps = {
  name: string;
  image: ImageSourcePropType;
};

const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <Card
      style={styles.card}
      image={image}
      imageOpacity="rgba(0, 0, 0, 0.14)"
      shadowDepth={0}>
      <Text style={styles.text}>{name}</Text>
    </Card>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 70,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
