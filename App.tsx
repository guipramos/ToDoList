import React from 'react';
import { Home } from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';

export function App() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};
