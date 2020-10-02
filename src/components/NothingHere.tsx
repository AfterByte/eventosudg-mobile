import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Assets
import EmptyLogo from '../assets/svg/undraw_Note_list_re_r4u9_Red.svg';

type NothingHereProps = {
  message: string | JSX.Element;
};

const NothingHere = ({ message }: NothingHereProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <EmptyLogo width={300} height={300} />
      <Text style={styles.text}>¡Aún no hay nada aquí!</Text>
      {typeof message === 'string' ? (
        <Text style={styles.message}>{message}</Text>
      ) : (
        message
      )}
    </View>
  );
};
export default NothingHere;

const styles = StyleSheet.create({
  text: {
    color: '#445068',
    fontWeight: 'bold',
    fontSize: 24,
  },
  message: {
    color: '#445068',
    fontSize: 16,
    textAlign: 'center',
  },
});
