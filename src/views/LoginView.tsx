import React from 'react';
//Import external components
import WavyHeader from '../components/WavyHeader'
import Login from '../components/Login'
//import React-native components
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from 'react-native'
// import vectors/images
import NoteListGreen from '../assets/svg/undraw_Note_list_re_r4u9_Green.svg'
import UdGLogo from '../assets/svg/Escudo_UdeG.svg'

export default function LoginView() {

  return (
    <SafeAreaView style={styles.container}>
      {/* Background vector image */}
      <NoteListGreen height={350} width={350} style={styles.bgImg}/>
      {/* Wave decoration component, to add a new one, you require to pass the next props:
      - a style class 
      - a background color
      - a custom height value (how big it's gonna be)
      - a custon top value (for position it)
      - the wave patter to draw (go to https://getwaves.io , generate a wave and on the download button just copy the "d=" values of the <path> tag) */}
      <WavyHeader 
        customStyles={styles.svgCurve}
        customBgColor={"#779BE7"}
        customHeight={60}
        customTop={45}
        customWavePattern={"M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,160C672,117,768,75,864,85.3C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"}
        />
        {/* UdG Logo Vector */}
      <UdGLogo style={styles.UdGLogo}/>
      <View style={styles.loginContainer}>
        <Login/>
      </View>
      <WavyHeader
        customStyles={styles.wavyFooter}
        customBgColor={"#779BE7"}
        customHeight={60}
        customTop={-70}
        customWavePattern={"M0,32L48,26.7C96,21,192,11,288,48C384,85,480,171,576,192C672,213,768,171,864,160C960,149,1056,171,1152,160C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  UdGLogo:{
    position: "absolute",
    top: "4%",
    left: "85%",
  },
  container: {
    flex: 1,
  },
  svgCurve:{
    position: "absolute",
    width: Dimensions.get('window').width,
  },
  wavyFooter:{
    flex: 1,
    justifyContent: "flex-end",
    width: Dimensions.get('window').width
  },
  loginContainer:{
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
    marginHorizontal: 10,
  },
  bgImg:{
    position: "absolute",
    top: "50%",
    right: "50%",
  },
});
