import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyle from '../helper/constants/commonStyle';
import colors from '../helper/constants/colors';
import {hp, wp} from '../helper/globalFunc';

const ButtonComp = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={{...commonStyle.text, color: colors.white}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary.buttonColor,
    height: hp(44),
    width: wp(150),
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//button
