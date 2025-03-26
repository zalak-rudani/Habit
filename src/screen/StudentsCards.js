import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import commonStyle from '../helper/constants/commonStyle';
import {hp, wp} from '../helper/globalFunc';
import icons from '../helper/constants/icons';
import strings from '../helper/constants/strings';
import {useSelector} from 'react-redux';
import colors from '../helper/constants/colors';
import HeaderComp from '../components/HeaderComp';

const StudentsCards = ({navigation}) => {
  const studentData = useSelector(
    state => state?.studentDataSlice?.studentData,
  );
  console.log('state-=-=-=-=', studentData);

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        text={strings.studentsCards.studentsList}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={studentData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                ...commonStyle.studentCard,
                borderLeftColor: colors.blue,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image
                  source={item?.gender === 'Boy' ? icons.boy : icons.girl}
                  style={{...commonStyle.icon, marginRight: 15}}
                />
                <Text style={commonStyle.subHeadText}>{item?.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',

                  flex: 1,
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={icons.numbers}
                  style={{...commonStyle.icon, marginRight: 15}}
                />
                <Text style={commonStyle.subHeadText}>{item?.rollNo}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  flex: 1,
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={icons.phone}
                  style={{...commonStyle.icon, marginRight: 15}}
                />
                <Text style={commonStyle.subHeadText}>{item?.phoneNo}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default StudentsCards;

const styles = StyleSheet.create({});
