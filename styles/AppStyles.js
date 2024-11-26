import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AppStyles = StyleSheet.create({
  external: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  scrollContainer: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  input: {
    width: wp('70%'),
    paddingVertical: hp('2%'),
    height: wp('15%'),
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center'
  },
  button: {
    width: wp('50%'),
    paddingVertical: hp('2%'),
    backgroundColor: '#0066ff',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  button2: {
    width: wp('50%'),
    paddingVertical: hp('2%'),
    backgroundColor: '#009900',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  button3: {
    width: wp('70%'),
    paddingVertical: hp('2%'),
    backgroundColor: '#ff1a1a',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  errorText: {
    color: '#e60000',
  },
  button_text: {
    color: 'white',
  },
  title: {
    paddingVertical: 15,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: hp('5%'),
    color: '#e60000',
  },
  scroll: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AppStyles;