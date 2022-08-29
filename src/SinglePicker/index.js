import React, { useState, useImperativeHandle, useMemo } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import styles from "./index.styles";
import Header from "../modules/Header";
import Wheel from "../Wheel";

const SinglePicker = React.forwardRef((props, ref) => {
  const { onConfirm, headerTitle, contentStyle, data, currentValue } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const [v, setV] = useState("");
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
    onConfirm(v ? v : curV);
  };

  const curV = useMemo(() => {
    if (!currentValue) {
      return data && data[0];
    }
    return currentValue;
  }, [currentValue, data, isModalVisible]);

  return (
    <Modal
      onBackdropPress={toggleModal}
      style={styles.modal}
      backdropOpacity={0.4}
      isVisible={isModalVisible}
    >
      <View
        style={{
          ...styles.content,
          ...contentStyle,
        }}
      >
        <Header
          title={headerTitle}
          onHeaderCancel={onHeaderCancel}
          onHeaderConfirm={onHeaderConfirm}
        />
        <View style={{ flexDirection: "row", flex: 1, width: "100%" }}>
          <Wheel
            currentValue={curV}
            data={data}
            onChange={(v) => {
              setV(v);
            }}
          />
        </View>
      </View>
    </Modal>
  );
});

export default SinglePicker;

SinglePicker.defaultProps = {
  currentValue: "",
  data: ["选项1", "选项2"],
  contentStyle: {},
  headerTitle: "标题",
  onConfirm: () => {},
  onCancel: () => {},
};
