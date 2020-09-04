import React from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
// Custom component imports
import WavyHeader from '../components/WavyHeader';
// Styles imports
import styles from '../assets/styles/styles';
// Vectors imports
import UdGLogo from '../assets/svg/Escudo_UdeG.svg';

const UpcomingEventsView = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background vector image */}
      <WavyHeader
        customStyles={styles.svgCurve}
        customBgColor={'#779BE7'}
        customHeight={140}
        customTop={60}
        customWavePattern={
          'M0,96L40,101.3C80,107,160,117,240,133.3C320,149,400,171,480,165.3C560,160,640,128,720,117.3C800,107,880,117,960,144C1040,171,1120,213,1200,218.7C1280,224,1360,192,1400,176L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'
        }
      />
      {/* UdG Logo Vector */}
      <UdGLogo style={styles.UdGLogo} />
    </SafeAreaView>
  );
};

export default UpcomingEventsView;
