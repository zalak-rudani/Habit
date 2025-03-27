import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import commonStyle from '../helper/constants/commonStyle';
import icons from '../helper/constants/icons';
import {hp, wp} from '../helper/globalFunc';

const HeaderComp = ({onPress, text, text2}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#FFF'}} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: wp(10),
          backgroundColor: '#FFF',
          paddingVertical: hp(8),
        }}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={{
              ...commonStyle.icon,
            }}
            source={icons.left}
          />
        </TouchableOpacity>
        <View style={{flex: 1, marginLeft: wp(6)}}>
          <Text
            style={{
              ...commonStyle.headText,
            }}>
            {text}
          </Text>
        </View>
      </View>
    </>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({});
