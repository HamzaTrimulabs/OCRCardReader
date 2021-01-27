import React from 'react';
import { Scan } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const MyStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Scan' component={Scan} />
      {/* <Stack.Screen name='CameraScanner' component={CameraScanner} /> */}
    </Stack.Navigator>
  );
};
export default MyStackNavigator;
