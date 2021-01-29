import React from 'react';
import { View } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../Config/config.json';

const Icon = createIconSetFromFontello(fontelloConfig, 'fontello');

export default function FontTelloIcon({ name, color, size }) {
  return (
    <View>
      <Icon name={name} color={color} size={size} />
    </View>
  );
}
