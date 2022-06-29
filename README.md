# rn-picker-modal

一个简单的`rn-picker-modal`组件

```bash
yarn add rn-picker-modal
```

基础用法
```js
import { DatePicker } from 'rn-picker-modal'


const Index = () => {
  const dateRef = useRef();
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={{flex: 1}}>
      <DatePicker
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


### 演示

<img src="https://github.com/yaogengzhu/rn-picker-modal/blob/master/demo.gif" />

```js
import { Wheel } from 'rn-picker-modal'
import { View,  SafeAreaView } from 'react-native'

const Index = () => {
  const dateRef = useRef();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Wheel data={[1, 2, 3]}>
      </View>
    </SafeAreaView>
  );
};


```