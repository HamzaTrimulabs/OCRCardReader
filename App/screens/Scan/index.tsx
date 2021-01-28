import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Environment from '../../Config/environment';
import firebase from '../../Config/firebase';
import styles from './style';

const Scan = () => {
  const [imageState, setImageState] = useState<string>();
  const [jsonResponse, setJsonResponse] = useState();
  const TurnOnGallery = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImageState(image.path);
    });
  };

  const TurnOnCamera = async () => {
    await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImageState(image.path);
    });
  };

  const submitToGoogle = async () => {
    try {
      let image =
        'https://i.pinimg.com/originals/9e/6c/9b/9e6c9b3c155e80d609fcf50bf3c0df9f.jpg';
      let body = JSON.stringify({
        requests: [
          {
            features: [
              { type: 'LABEL_DETECTION', maxResults: 10 },
              // { type: 'LANDMARK_DETECTION', maxResults: 5 },
              // { type: 'FACE_DETECTION', maxResults: 5 },
              // { type: 'LOGO_DETECTION', maxResults: 5 },
              { type: 'TEXT_DETECTION', maxResults: 5 },
              { type: 'DOCUMENT_TEXT_DETECTION', maxResults: 5 },
              // { type: 'SAFE_SEARCH_DETECTION', maxResults: 5 },
              // { type: 'IMAGE_PROPERTIES', maxResults: 5 },
              // { type: 'CROP_HINTS', maxResults: 5 },
              // { type: 'WEB_DETECTION', maxResults: 5 },
            ],
            image: {
              source: {
                imageUri: image,
              },
            },
          },
        ],
      });
      let response = await fetch(
        'https://vision.googleapis.com/v1/images:annotate?key=' +
          // Environment['GOOGLE_CLOUD_VISION_API_KEY'],
          'AIzaSyCSCL4_QrhjQEUE_SeP5rg8gzSMdJg4FNs',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: body,
        }
      );
      let responseJson = await response.json();
      console.log(responseJson);
      setJsonResponse(responseJson);
    } catch (error) {
      console.log(error.error);
    }
  };

  return (
    <View style={styles.parentStyle}>
      <TouchableOpacity onPress={() => TurnOnGallery()}>
        <View style={styles.scanButtonStyle}>
          <Text style={styles.scanTextStyle}>Gallery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => submitToGoogle()}>
        <View style={styles.scanButtonStyle}>
          <Text style={styles.scanTextStyle}>Camera</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.imageViewStyle}>
        <Image style={styles.imageStyle} source={{ uri: imageState }} />
      </View>
    </View>
  );
};
export default Scan;
