import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  modal: {
    paddingVertical: 0,
    marginHorizontal: 0,
  },
  content: {
    width: '100%',
    height: 400,
    bottom: 0,
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'column',
    width: '100%',
    height: 48,
  },
})

export default styles