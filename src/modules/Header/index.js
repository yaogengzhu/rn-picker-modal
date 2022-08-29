import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, PixelRatio} from 'react-native';

const Header = props => {
  const {title = '标题', onHeaderConfirm, onHeaderCancel} = props;
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.box} onPress={onHeaderCancel}>
        <Text style={{color: '#333', fontSize: 16}}>取消</Text>
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={{color: '#333', fontSize: 18, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={styles.box} onPress={onHeaderConfirm}>
        <Text style={{color: '#00A6FF', fontSize: 16}}>确定</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

Header.defaultProps = {
  title: '',
  onHeaderConfirm: () => {},
  onHeaderCancel: () => {},
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 48,
    borderBottomColor: '#eee',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  box: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
