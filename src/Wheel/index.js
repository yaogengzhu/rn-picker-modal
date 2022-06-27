import React, {useRef, useEffect, useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './index.styles';

const Wheel = props => {
  const {itemNums, itemHeight, extra, onChange, data, currentValue} = props;
  const [position, setPosition] = useState(0);
  const wheelRef = useRef();

  useEffect(() => {
    if (wheelRef.current) {
      wheelRef.current.scrollTo({y: itemHeight * position, animated: true});
    }
  }, [position]);

  useEffect(() => {
    const index = data.findIndex(v => v === currentValue);
    console.log(currentValue, 'currentValue')
    setPosition(index);
  }, [currentValue]);

  const onEndScroll = e => {
    const {contentOffset} = e.nativeEvent;
    const {y} = contentOffset;
    const index = Math.round(y / itemHeight);
    setPosition(index);
    onChange(data[index], index);
  };

  return (
    <View style={styles.content(itemNums, itemHeight)}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={wheelRef}
        onMomentumScrollEnd={onEndScroll}
        snapToInterval={itemHeight}
        scrollEventThrottle={16}>
        <View
          style={styles.scorllContent(Math.floor(itemNums / 2), itemHeight)}>
          {data.map((v, index) => (
            <View key={v} style={styles.item(itemHeight)}>
              <Text style={styles.itemText(position === index)}>{v}</Text>
              <Text
                style={{
                  marginLeft: 4,
                  ...styles.itemText(position === index),
                }}>
                {extra}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.maskContent} pointerEvents="none">
        <View style={styles.maskTop} />
        <View style={styles.maskCenter(itemHeight)} />
        <View style={styles.maskBottom} />
      </View>
    </View>
  );
};

export default Wheel;

Wheel.defaultProps = {
  currentValue: 0,
  itemNums: 7,
  itemHeight: 50,
  extra: '',
  onChange: () => {},
  data: [1, 2],
};
