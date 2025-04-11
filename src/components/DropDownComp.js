import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {hp, wp} from '../helper/globalFunc';
import colors from '../helper/constants/colors';
import commonStyle from '../helper/constants/commonStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import {fonts} from '../helper/constants/fonts';

const DropDownComp = ({
  text,
  error,
  open,
  value,
  items,
  onOpen,
  zIndex,
  onClose,
  setOpen,
  setItems,
  setValue,
  zIndexInverse,
}) => {
  return (
    <View style={{marginVertical: hp(5)}}>
      <Text style={styles.textHead}>{text}</Text>
      <DropDownPicker
        // listMode="SCROLLVIEW"
        style={styles.dropDownView}
        dropDownContainerStyle={styles.dropDownContainer}
        placeholderStyle={styles.placeholder}
        textStyle={styles.text}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onClose={onClose}
        onOpen={onOpen}
        zIndex={zIndex}
        zIndexInverse={zIndexInverse}
      />
      <Text style={{borderBottomWidth: 1, borderColor: colors.lightGray}} />
      {{error} ? <Text style={commonStyle.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownView: {
    fontSize: 16,
    paddingHorizontal: wp(-12),
    marginBottom: hp(-16),
    borderColor: colors.primary.backgroundColor,
    backgroundColor: colors.primary.backgroundColor,
  },

  dropDownContainer: {
    borderColor: colors.white,
    // color: 'red',
    fontSize: 16,
    borderRadius: 10,
  },
  placeholder: {
    color: colors.primary.backgroundColor,
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    flex: 1,
    fontFamily: fonts.extraLight,
    color: colors.primary.fontColor,
  },
  textHead: {
    ...commonStyle.text,
    marginBottom: hp(3),
    color: colors.lightGray,
  },
});

export default DropDownComp;
