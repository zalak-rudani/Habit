import {StyleSheet} from 'react-native';

import colors from './colors';
import {fonts} from './fonts';
import {hp, wp} from '../globalFunc';

const commonStyle = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: colors.primary.backgroundColor,
  },

  subHeadText: {
    fontSize: 22,
    fontWeight: '500',
    fontFamily: fonts.medium,
    color: colors.primary.fontColor,
  },

  headText: {
    fontSize: 25,
    fontFamily: fonts.bold,
    color: colors.screenHead,
  },

  text: {
    fontSize: 16,
    fontFamily: fonts.extraLight,
    color: colors.primary.fontColor,
  },

  mediumText: {
    fontSize: 20,
    fontFamily: fonts.medium,
    color: colors.primary.fontColor,
  },

  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  margin10: {
    marginTop: hp(10),
  },

  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    height: hp(25),
    width: hp(25),
  },

  icon50: {
    height: hp(50),
    width: hp(50),
  },
  icon70: {
    height: hp(80),
    width: hp(80),
  },

  plus: {
    alignItems: 'flex-end',
    margin: hp(20),
    position: 'absolute',
    bottom: hp(20),
    right: wp(0),
  },

  error: {
    color: 'red',
    fontSize: 12,
    fontFamily: fonts.extraLight,
  },

  textInput: {
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
    paddingVertical: 15,
    fontFamily: fonts.extraLight,
    color: colors.primary.fontColor,
  },
  stdDivCards: {
    // flex: 1,
    padding: 15,
    backgroundColor: colors.white,
    margin: hp(10),
    borderRadius: 5,
    height: hp(150),
    width: wp(175),
    alignItems: 'center',
    // width: wp(50),
  },

  studentCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderLeftWidth: 6,
    marginHorizontal: wp(25),
    marginVertical: hp(15),
    borderRadius: 12,
    height: hp(150),
    padding: 15,
  },
});

export default commonStyle;
