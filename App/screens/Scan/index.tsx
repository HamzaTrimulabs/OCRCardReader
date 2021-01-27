import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style';

const Scan = () => {
  const navigation = useNavigation();

  const TurnOnGallery = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  const TurnOnCamera = async () => {
    await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  return (
    <View style={styles.parentStyle}>
      <TouchableOpacity onPress={() => TurnOnGallery()}>
        <View style={styles.scanButtonStyle}>
          <Text style={styles.scanTextStyle}>Gallery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => TurnOnCamera()}>
        <View style={styles.scanButtonStyle}>
          <Text style={styles.scanTextStyle}>Camera</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Scan;
