import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  itemImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover'
  },
  itemTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: FONT_SIZE.md
  },
  containerDate: {
    marginTop: -15,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 20
  },
  itemDate: {
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.md
  }
})
