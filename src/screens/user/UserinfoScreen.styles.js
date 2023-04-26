import { StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  header: {
    backgroundColor: '#F0F0F0',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 40,
    marginRight: 5
  },
  profileInfo: {
    alignItems: 'center'
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  profileLocation: {
    fontSize: 16,
    color: '#777'
  },
  content: {
    flex: 1,
    padding: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24
  }
})
