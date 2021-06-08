/**
 * @format
 */

import {AppRegistry, SafeAreaView} from 'react-native';
import React from 'react';
import configureStore from './src/Redux/store';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
const store = configureStore();
const Homepay = () => (
  <SafeAreaView style={{flex: 1}}>
    <Provider store={store}>
      <App />
    </Provider>
  </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => Homepay);
