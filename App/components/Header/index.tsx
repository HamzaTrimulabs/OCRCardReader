import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';

interface HeaderProps {
  title: string;
}

const HeaderComponent = ({ title }: HeaderProps) => {
  return (
    <View style={style.parentStyle}>
      <Image
        style={style.imageStyle}
        source={require('../../assets/scanImage.png')}
      />
      <Text style={style.textStyle}>{title}</Text>
    </View>
  );
};

export default HeaderComponent;
