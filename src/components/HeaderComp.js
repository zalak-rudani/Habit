import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyle from '../helper/constants/commonStyle';
import icons from '../helper/constants/icons';
import {hp, wp} from '../helper/globalFunc';

const HeaderComp = ({onPress, text}) => {
  return (
    <View
      style={{
        ...commonStyle.directionRow,
        marginTop: 50,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{...commonStyle.icon, marginHorizontal: wp(10)}}
          source={icons.left}
        />
      </TouchableOpacity>
      <Text
        style={{
          ...commonStyle.headText,
          flex: 1,
          textAlign: 'center',
          marginBottom: hp(20),
        }}>
        {text}
      </Text>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({});
