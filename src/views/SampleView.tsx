import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SampleView = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

export default SampleView;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
  },
  tinyLogo: {
    resizeMode: 'contain',
    flex: 1,
  },
});
