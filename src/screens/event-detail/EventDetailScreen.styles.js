import { StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight
  },
  textContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 5,
    color: 'gray'
  },
  textInfo: {
    fontSize: 20,
    color: COLORS.primary,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: 10
  },
  webButton: {
    textAlign: 'center',
    color: COLORS.primary,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: COLORS.grey,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 120,
    marginTop: 10
  },
  containerButton: {
    alignItems: 'center'
  },
  containerModal: {
    flex: 1
  },
  closeButton: {
    alignItems: 'flex-end'
  }
})
