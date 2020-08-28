import React, { useContext } from 'react';
// Authorization
import { AuthContext, AuthProviderPayload } from './AuthProvider';
// ReactNative components
import { View, Text } from 'react-native';
// React navigation components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
// Views imports
import LoginView from '../views/LoginView';
import UpcomingEventsView from '../views/UpcomingEventsView';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={LoginView} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  const { signout } = useContext(AuthContext) as AuthProviderPayload;

  const signOut = async () => {
    try {
      await signout();
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView
            contentContainerStyle={{ flex: 1, paddingVertical: 0 }}
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
      }}>
      <Drawer.Screen name="Home" component={UpcomingEventsView} />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  const { apiClient } = useContext(AuthContext) as AuthProviderPayload;
  return (
    <NavigationContainer>
      {apiClient.tokenLoaded ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Routes;
