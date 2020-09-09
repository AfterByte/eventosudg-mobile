// React native elements
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
// Navigator elements
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerItem,
  DrawerContentOptions,
} from '@react-navigation/drawer';
// Context import
import { AuthContext, AuthProviderPayload } from './AuthProvider';

const CustomDrawer = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  const { signout } = useContext(AuthContext) as AuthProviderPayload;

  const signOut = async () => {
    try {
      await signout();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.container}
      {...props}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <DrawerItemList style={{ flex: 2 }} {...props} />
        <DrawerItem
          style={{ marginTop: 'auto' }}
          label="Log out"
          onPress={signOut}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 0 },
});
