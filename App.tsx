/*
* This is pretty much what an "App" component would look like on a RN project
* It is just an entry point where providers, packages, are configured.
* In this case, I am using Recoil, but many others can be used.
* Router is just the app's routing config
*/
import React from 'react';
import {RecoilRoot} from 'recoil';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Router} from './src/config/navigation/Router';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" translucent />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
