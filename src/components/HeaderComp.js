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

const HeaderComp = ({
  onPress1,
  onPress2,
  onPress3,
  text,
  source1,
  source2,
  source3,
}) => {
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
        <TouchableOpacity onPress={onPress1}>
          <Image
            style={{
              ...commonStyle.icon,
            }}
            source={source1}
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
        <TouchableOpacity onPress={onPress2}>
          <Image
            style={{
              ...commonStyle.icon,
            }}
            source={source2}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress3}>
          <Image
            style={{
              ...commonStyle.icon,
            }}
            source={source3}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({});
