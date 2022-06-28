import React, {useState, useImperativeHandle, useMemo, useEffect} from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './index.styles';
import Header from './modules/Header';
import Wheel from '../Wheel'

const DataPicker = React.forwardRef((props, ref) => {
  const {range, onConfirm, date} = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const insets = useSafeAreaInsets()
  
  useEffect(() => {
    const y = new Date(date).getFullYear();
    const m = new Date(date).getMonth() + 1;
    const d = new Date(date).getDate();
    setYear(y);
    setMonth(m);
    setDay(d);
  }, [date, isModalVisible]);

  const getYears = useMemo(() => {
    const years = [];
    const start = new Date().getFullYear() + range;
    const end = new Date().getFullYear() - range;
    for (let i = start; i > end; i--) {
      years.push(i);
    }
    return years;
  }, []);
  const getMonths = useMemo(() => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    return months;
  }, []);
  const getDays = useMemo(() => {
    const days = [];
    const dayLength = new Date(year, month, 0).getDate();
    for (let i = 1; i <= dayLength; i++) {
      days.push(i);
    }
    return days;
  }, [year, month]);

  useEffect(() => {
    if(month !== new Date(date).getMonth() + 1) {
      setDay(1);
    }
  }, [month])

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useImperativeHandle(ref, () => ({
    toggleModal,
  }));

  const onHeaderCancel = () => {
    setModalVisible(false);
  };

  const onHeaderConfirm = () => {
    onConfirm(`${year}-${month}-${day}`);
  };

  return (
    <Modal
      onBackdropPress={toggleModal}
      style={styles.modal}
      backdropOpacity={0.4}
      isVisible={isModalVisible}>
      <View style={{
        ...styles.content,
        marginBottom: -Math.max(insets.bottom, 16) 
      }}>
        <Header
          onHeaderCancel={onHeaderCancel}
          onHeaderConfirm={onHeaderConfirm}
        />
        <View style={{flexDirection: 'row', flex: 1, width: '100%'}}>
          <Wheel
            currentValue={year}
            extra="年"
            data={getYears}
            onChange={v => {
              setYear(v);
            }}
          />
          <Wheel
            data={getMonths}
            currentValue={month}
            extra="月"
            onChange={v => {
              setMonth(v);
            }}
          />
          <Wheel
            data={getDays}
            currentValue={day}
            extra="日"
            onChange={v => {
              setDay(v);
            }}
          />
        </View>
      </View>
    </Modal>
  );
});

export default DataPicker;

DataPicker.defaultProps = {
  date: new Date(),
  range: 5,
  onConfirm: () => {},
  onCancel: () => {},
};
