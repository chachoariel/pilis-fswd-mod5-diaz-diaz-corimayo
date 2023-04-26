import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'
export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // padding: 80,
    backgroundColor: '#fff',
    padding: 16,
    marginRight: 50,
    marginLeft: 50
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 5
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center'
  }
})
