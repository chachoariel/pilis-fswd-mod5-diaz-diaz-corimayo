import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alaignItems: 'center',
    justifyContent: 'center'
  },
  state: {
    padding: 19,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  relevant: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    borderRadius: 10
  }
})
