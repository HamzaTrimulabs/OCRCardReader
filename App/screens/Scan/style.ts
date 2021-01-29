import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.BackgroundBluePurple,
  },
  parentStyle: {},
  parentButtonsStyle: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headingStyle: {
    fontSize: 24,
    alignSelf: 'center',
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
  detailInfoStyle: {
    backgroundColor: Colors.BlueGrey,
    margin: 5,
    borderRadius: 5,
  },
  detailTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: Colors.White,
    marginLeft: 20,
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
