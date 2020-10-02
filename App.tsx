/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useMemo } from 'react';
// Custom components
import AuthProvider from './src/components/AuthProvider';
import Routes from './src/components/Routes';
import SplashView from './src/views/SplashView';
// Config
import moment from 'moment';
import 'moment/locale/es-us';
moment.locale('es');

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
