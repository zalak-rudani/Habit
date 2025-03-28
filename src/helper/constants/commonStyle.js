import {StyleSheet} from 'react-native';
import colors from './colors';
import {hp, wp} from '../globalFunc';
import {fonts} from './fonts';

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
    fontWeight: '600',
    fontFamily: fonts.extraLight,
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
    height: hp(30),
    width: hp(30),
  },

  icon50: {
    height: hp(50),
    width: hp(50),
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
    marginVertical: hp(10),
    borderRadius: 12,
    height: hp(150),
    padding: 15,
  },
});

export default commonStyle;
