import { StyleSheet, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  UdGLogo: {
    position: 'absolute',
    top: '4%',
    left: '85%',
  },
  body: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  wavyFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
  },
  loginContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
    marginHorizontal: 10,
  },
  bgImg: {
    position: 'absolute',
    top: '50%',
    right: '50%',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logoText: {
    color: '#445068',
    fontSize: 42,
  },
  debug: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default styles;
