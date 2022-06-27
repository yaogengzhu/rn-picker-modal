# rn-picker-modal

一个简单的`react-native-picker`组件

```bash
yarn add react-native-picker
```

基础用法
```js
import { DataPicker } from 'rn-picker-modal'


const Index = () => {
  const dateRef = useRef();
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={{flex: 1}}>
      <DataPicker
        ref={dateRef}
        date={date}
        onConfirm={v => {
            setDate(v)
        }}
      />
      <Button
        title="open"
        onPress={() => {
          dateRef.current.toggleModal();
        }}
      />
    </SafeAreaView>
  );
};
```