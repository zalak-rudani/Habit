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
  },
  headText: {
    fontSize: 35,
    fontWeight: '700',
    fontFamily: fonts.metrophobic_regular,
  },

  text: {
    fontSize: 18,
    fontWeight: '400',
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
});

export default commonStyle;
