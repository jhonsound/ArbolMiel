import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
    height: 280,
  },
  background: {
    opacity: 0.3,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    gap: 15,
    marginBottom: '100px',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    fontSize: 18,
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5, // for Android
  },
  submitButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 15
  },
  submitButtonText: {
    color: 'white',
    fontSize: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '22%',
    resizeMode: 'stretch',
  },
  qrImage: {
    position: 'absolute',
    left: 10,
    bottom: 20,
    width: '20%',
    height: '10%',
    resizeMode: 'stretch',
  },
  verifyText: {
    position: 'absolute',
    bottom: 10,
    left: 4,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default LoginStyles;