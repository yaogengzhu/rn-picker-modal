import {StyleSheet, PixelRatio} from 'react-native';

const styles = StyleSheet.create({
  content: (i, nums) => ({
    flex: 1,
    marginTop: 10,
    height: i * nums,
  }),
  item: height => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height,
    width: '100%',
    borderColor: 1,
    boorderWidth: 1,
  }),

  itemText: flag => ({
    fontSize: flag ? 20 : 16,
    opacity: flag ? 1 : 0.2,
  }),
  scorllContent: (i, h) => ({
    marginVertical: i * h,
  }),

  maskContent: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    opacity: 0.2,
    width: '100%',
    height: '100%',
  },
  maskTop: {
    flex: 1,
  },
  maskCenter: height => ({
    height,
    borderColor: '#ccc',
    borderTopWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1 / PixelRatio.get(),
  }),
  maskBottom: {
    flex: 1,
  },
});

export default styles;
