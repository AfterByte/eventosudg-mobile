import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
// Assets
import EmptyLogo from '../assets/svg/undraw_Note_list_re_r4u9_Red.svg';

type NothingHereProps = {
  message: string | JSX.Element;
  mainMessage?: string | JSX.Element;
  Image?: React.FC<SvgProps>;
  imageSize?: number;
};

const NothingHere = ({
  mainMessage = '¡Aún no hay nada aquí!',
  message,
  Image = EmptyLogo,
  imageSize = 300,
}: NothingHereProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image width={imageSize} height={imageSize} />
      <Text style={styles.text}>{mainMessage}</Text>
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
