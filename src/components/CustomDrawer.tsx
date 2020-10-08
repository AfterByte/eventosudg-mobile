// React native elements
import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
// Navigator elements
import {
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
// Context import
import { AuthContext, AuthProviderPayload } from './AuthProvider';
// Custom components
import { Card, PictureFrame } from './Elements';
// Assets
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawer = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  const { signout } = useContext(AuthContext) as AuthProviderPayload;

  const newState = { ...props.state };
  const exclude = ['EventDetails'];
  newState.routes = newState.routes.filter(
    (item) => exclude.indexOf(item.name) === -1,
  );

  const signOut = async () => {
    try {
      await signout();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card
        shadowDepth={0}
        color="#d6e1f8"
        roundedCorner={false}
        style={styles.userCard}>
        <View style={styles.editProfile}>
          <Icon name="account-edit" size={20} color={'#445068'} />
        </View>
        <View style={styles.userContent}>
          <PictureFrame style={styles.userPicture} shape="circle" size={70} />
          <View style={styles.userInfo}>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>
              Alfonso Valencia
            </Text>
            <Text style={styles.text}>Ing. de Software</Text>
          </View>
        </View>
      </Card>
      <ScrollView>
        <DrawerItemList
          {...props}
          state={newState}
          itemStyle={styles.item}
          labelStyle={styles.itemText}
          activeBackgroundColor="white"
        />
      </ScrollView>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 'auto',
          marginBottom: 16,
        }}>
        <TouchableOpacity style={styles.signOut} onPress={signOut}>
          <Text style={styles.signOutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: { padding: 0, margin: 0, flex: 1 },
  userCard: { paddingHorizontal: 16, paddingVertical: 26 },
  userContent: { flexDirection: 'row' },
  userPicture: {
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#445068',
    backgroundColor: 'white',
  },
  userInfo: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#445068',
  },
  editProfile: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    margin: 10,
    right: 1,
  },
  signOut: {
    backgroundColor: '#BD4455',
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  signOutText: {
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 28,
  },
  item: {
    borderBottomColor: '#445068',
    borderBottomWidth: 2,
    marginVertical: 0,
  },
  itemText: {
    color: '#445068',
    margin: 0,
  },
});
