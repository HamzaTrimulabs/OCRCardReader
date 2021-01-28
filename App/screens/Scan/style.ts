import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
export default StyleSheet.create({
  parentStyle: {
    marginTop: 100,
    marginHorizontal: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonStyle: {
    backgroundColor: Colors.BlueGrey,
    borderRadius: 20,
    padding: 15,
    marginBottom: 50,
  },
  scanTextStyle: {
    color: Colors.White,
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageViewStyle: {
    borderRadius: 5,
    borderWidth: 5,
    borderColor: Colors.BlueGrey,
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
});
