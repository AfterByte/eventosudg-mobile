import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
// Custom component imports
import WavyHeader from '../components/WavyHeader';
// Icon imports
import UdGLogo from '../assets/svg/Escudo_UdeG.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

type HeaderProps = {
  title: String;
  isSubPage?: boolean;
};

const Header = ({ title, isSubPage = false }: HeaderProps) => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.headeContent}>
      <WavyHeader
        customStyles={styles.wave}
        customBgColor={'#d6e1f8'}
        customHeight={60}
        customTop={50}
        customWavePattern={
          'M0,256L80,256C160,256,320,256,480,229.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
        }
      />
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={
            !isSubPage ? () => toggleDrawer() : () => navigation.goBack()
          }>
          <Icon
            style={{ height: 40 }}
            name={isSubPage ? 'arrow-left' : 'menu'}
            size={40}
            color={'#445068'}
          />
        </TouchableOpacity>
        <UdGLogo />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headeContent: {
    padding: 10,
  },
  wave: {
    width: Dimensions.get('window').width,
    position: 'absolute',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#445068',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 1,
    padding: 4,
  },
  logo: {},
  debug: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
