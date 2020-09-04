import React from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
// Custom component imports
import WavyHeader from '../components/WavyHeader';
// Styles imports
import styles from '../assets/styles/styles';
// Vectors imports
import UdGLogo from '../assets/svg/Escudo_UdeG.svg';
import Calendar from '../assets/svg/undraw_events_2p66_Green.svg';

type SplashViewProps = {
  loading?: boolean;
};

const SplashView = ({ loading }: SplashViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background vector image */}
      <WavyHeader
        customStyles={styles.svgCurve}
        customBgColor={'#779BE7'}
        customHeight={60}
        customTop={45}
        customWavePattern={
          'M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,160C672,117,768,75,864,85.3C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        }
      />
      {/* UdG Logo Vector */}
      <UdGLogo style={styles.UdGLogo} />
      <View style={styles.logo}>
        <Text style={styles.logoText}>Eventos UDG</Text>
        <Calendar height={'300px'} width={'300px'} />
        {loading ? <ActivityIndicator size="large" color="#445068" /> : null}
      </View>
      <WavyHeader
        customStyles={styles.wavyFooter}
        customBgColor={'#779BE7'}
        customHeight={60}
        customTop={-70}
        customWavePattern={
          'M0,32L48,26.7C96,21,192,11,288,48C384,85,480,171,576,192C672,213,768,171,864,160C960,149,1056,171,1152,160C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        }
      />
    </SafeAreaView>
  );
};

export default SplashView;
