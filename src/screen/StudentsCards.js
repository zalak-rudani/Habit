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

const StudentsCards = ({navigation, route}) => {
  const standard = route?.params?.std;
  const division = route?.params?.div;

  const studentData = useSelector(
    state => state?.studentDataSlice?.studentData,
  );

  const sameStdDivStudents = studentData?.filter(element => {
    if (element?.std === standard && element?.div === division) {
      return element;
    }
  });

  console.log('sameStdDivStudents-=-=-=-=-=', sameStdDivStudents);

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        text={`${standard}-${division}`}
        onPress={() => navigation.goBack()}
        source={icons.left}
      />
      <FlatList
        data={sameStdDivStudents}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StudentDetails', {
                  id: item?.id,
                })
              }
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
                  // paddingRight: 20,
                  flex: 1,
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={icons.numbers}
                  style={{...commonStyle.icon, marginRight: 15}}
                />
                {/* <Text style={commonStyle.headText}>{'Roll No.'}</Text> */}
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
