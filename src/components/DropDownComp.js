import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {hp} from '../helper/globalFunc';
import colors from '../helper/constants/colors';
import commonStyle from '../helper/constants/commonStyle';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownComp = ({
  text,

  error,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Boy', value: 'Boy'},
    {label: 'Girl', value: 'Girl'},
  ]);
  return (
    <View style={{marginVertical: hp(5)}}>
      <Text
        style={{
          ...commonStyle.text,
          marginBottom: hp(3),

          color: colors.lightGray,
        }}>
        {text}
      </Text>
      <DropDownPicker
        listMode="SCROLLVIEW"
        placeholder="Select your restaurant"
        style={{
          borderColor: '#F0F4F9',
          backgroundColor: '#F0F4F9',
          borderWidth: 1,
          paddingHorizontal: 12,
          // paddingVertical: Platform.OS === 'ios' ? 12 : 6,
          fontSize: 16,
          borderRadius: 5,
          marginTop: 8,
          marginBottom: 16,
        }}
        dropDownContainerStyle={{
          borderColor: 'gray',
          color: '#000',
          fontSize: 16,
          borderRadius: 10,
        }}
        // placeholderStyle={{
        //   color: '#696969',
        //   fontSize: 16,
        // }}
        textStyle={{
          fontSize: 16,
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text style={{borderBottomWidth: 1, borderColor: colors.lightGray}} />
      {{error} ? <Text style={commonStyle.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
});

export default DropDownComp;
