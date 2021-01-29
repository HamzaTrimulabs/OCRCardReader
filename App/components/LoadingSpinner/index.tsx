import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Colors } from '../../constants';
import style from './style';
const LoadingSpinner = () => {
  return (
    <View style={style.spinnerStyle}>
      <Text style={style.textStyle}>Please Wait ...</Text>
      <ActivityIndicator size='large' color={Colors.DarkGrey} />
    </View>
  );
};
export default LoadingSpinner;
