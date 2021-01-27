import React from 'react';
import MyStackNavigator from './MyStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>
  );
}
