import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
export default StyleSheet.create({
  parentStyle: {
    backgroundColor: Colors.BluePurple,
    flex: 1,
  },
  parentButtonsStyle: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scanButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BlueGrey,
    borderRadius: 20,
    padding: 15,
    marginBottom: 50,
  },
  scanTextStyle: {
    padding: 5,
    paddingLeft: 10,
    color: Colors.White,
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageViewStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 310,
    height: 310,
    borderRadius: 5,
    borderWidth: 10,
    borderColor: Colors.BlueGrey,
    backgroundColor: Colors.BlueGrey,
  },
  imageStyle: {
    width: 400,
    height: 300,
  },
});
