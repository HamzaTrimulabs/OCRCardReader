import React from 'react';
import { Scan } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../constants';
import { Header } from '../components';

const MyStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Scan'
        component={Scan}
        options={{
          headerTitle: (props) => <Header title='Scan' {...props} />,
          headerStyle: {
            backgroundColor: Colors.DarkGrey,
          },
          headerTintColor: Colors.White,

          cardStyle: { backgroundColor: Colors.White },
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStackNavigator;
