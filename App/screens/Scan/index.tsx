import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import firebase from '../../Config/firebase';
import { v4 as uuidv4 } from 'uuid';
import FontTelloIcon from '../../components/Fontello';
import { Icons, Colors } from '../../constants';
import { getCardNo } from '../../util';
import styles from './style';

const Scan = () => {
  const [deleteImage, setDeleteImage] = useState();
  const [firebaseImageState, setFirebaseImageState] = useState<string>();
  const [jsonResponse, setJsonResponse] = useState();
  console.log('json response = ', jsonResponse);
  useEffect(() => {
    console.log('json response Effect = ', jsonResponse);
  }, [jsonResponse]);
  const deleteData = () => {
    deleteImage?.delete();
  };
  const TurnOnGallery = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(async (image) => {
      const uploadUrl = await uploadImageAsync(image.path);
      setFirebaseImageState(uploadUrl);
      submitToGoogle(uploadUrl);
      deleteData();
    });
  };

  const TurnOnCamera = async () => {
    await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async (image) => {
      const uploadUrl = await uploadImageAsync(image.path);
      setFirebaseImageState(uploadUrl);
      submitToGoogle(uploadUrl);
      deleteData();
    });
  };

  const submitToGoogle = async (uploadUrl: string) => {
    try {
      let image = uploadUrl;
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
      console.log('response from google', responseJson.responses);
      getCardNo(responseJson.responses[0].fullTextAnnotation.text);
      setJsonResponse(responseJson.responses);
    } catch (error) {
      console.log(error.error);
    }
  };

  const uploadImageAsync = async (imageState: string) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', imageState, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(uuidv4());
    setDeleteImage(ref);

    const snapshot = await ref.put(blob);

    blob.close();

    return await snapshot.ref.getDownloadURL();
  };
  return (
    <View style={styles.parentStyle}>
      <View style={styles.parentButtonsStyle}>
        <TouchableOpacity onPress={() => TurnOnGallery()}>
          <View style={styles.scanButtonStyle}>
            <FontTelloIcon
              name={Icons.Picture}
              color={Colors.Black}
              size={25}
            />
            <Text style={styles.scanTextStyle}>Gallery</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => TurnOnCamera()}>
          <View style={styles.scanButtonStyle}>
            <FontTelloIcon
              name={Icons.CameraFilled}
              color={Colors.Black}
              size={25}
            />
            <Text style={styles.scanTextStyle}>Camera</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Id card No:</Text>
      </View>

      <View style={styles.imageViewStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: firebaseImageState
              ? firebaseImageState
              : 'https://bitsofco.de/content/images/2018/12/broken-1.png',
          }}
        />
      </View>
    </View>
  );
};
export default Scan;
