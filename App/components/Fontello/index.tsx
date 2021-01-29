import React from 'react';
import { View } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../Config/config.json';

const Icon = createIconSetFromFontello(fontelloConfig, 'fontello');

interface FontelloProps {
  name: string;
  color: string;
  size: number;
}

export default function FontTelloIcon({ name, color, size }: FontelloProps) {
  return (
    <View>
      <Icon name={name} color={color} size={size} />
    </View>
  );
}
