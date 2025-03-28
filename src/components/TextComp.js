import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyle from '../helper/constants/commonStyle';
import colors from '../helper/constants/colors';
import {hp, wp} from '../helper/globalFunc';

const TextComp = ({val1, val2, head1, head2}) => {
  return (
    <View style={styles.mainView}>
      <View style={{flex: 1}}>
        <Text style={styles.head}>{head1}</Text>
        <Text style={commonStyle.text}>{val1}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.head}>{head2}</Text>
        <Text style={commonStyle.text}>{val2}</Text>
      </View>
    </View>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  mainView: {
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    flexDirection: 'row',
    marginHorizontal: wp(10),
    paddingVertical: hp(20),
  },

  head: {
    ...commonStyle.text,
    paddingBottom: hp(10),
    color: colors.lightGray,
  },
});
