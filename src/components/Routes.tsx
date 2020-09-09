import React, { useContext } from 'react';
// Authorization
import { AuthContext, AuthProviderPayload } from './AuthProvider';
// Custom components
import CustomDrawer from './CustomDrawer';
// React navigation components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Views imports
import LoginView from '../views/LoginView';
import UpcomingEventsView from '../views/UpcomingEventsView';
import SampleView from '../views/SampleView';

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
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={UpcomingEventsView} />
      <Drawer.Screen name="Sample" component={SampleView} />
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
